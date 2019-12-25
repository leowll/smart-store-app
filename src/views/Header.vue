<template>
  <header class="detail-page-header">
    <div class="header-filterbar">
        <ui5-label class="samples-big-margin-right" for="myInput" required>Name</ui5-label>
        <ui5-input class="input-width" id="myInput" placeholder="Enter your Name" required></ui5-input>
        <ui5-label class="samples-big-margin-right" for="myInput" required>Name</ui5-label>
        <ui5-input class="input-width" id="myInput" placeholder="Enter your Name" required></ui5-input>
        <ui5-button design="Emphasized">Search</ui5-button>
    </div>
    <ui5-tabcontainer class="detail-page-header-menu" fixed collapsed @itemSelect="$emit('tabPress', $event.detail.item.getAttribute('data-filter-type'))">
        <ui5-tab data-filter-type="all" text="All Items" :additional-text="products.length"></ui5-tab>
        <ui5-tab data-filter-type="noPerishable" text="Non-Perishable" :additional-text="nonPerishableCount"></ui5-tab>
        <ui5-tab data-filter-type="perishable" text="Perishable" :additional-text="perishableCount"></ui5-tab>
        <ui5-tab data-filter-type="alerts" text="Alerts" :additional-text="alertCount"></ui5-tab>
    </ui5-tabcontainer>

  </header>
</template>



<script>
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabContainer";

export default {
  name: "header",
  props: {
    products: Array,
    nonPerishableCount: Number,
    perishableCount: Number,
    alertCount: Number
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.detail-page-header-bar {
  height: 6rem;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: var(--sapUiGroupContentBackground, #ffffff);
}

.detail-page-header-menu {
  border: 1px solid var(--sapUiListTableGroupHeaderBorderColor, #d9d9d9);
}

.header-filterbar {
  padding: 1rem 3rem;
}
.input-width{
  width: 10rem;
  margin-right: 1rem;
}
</style>