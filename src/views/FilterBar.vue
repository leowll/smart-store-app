<template>
  <div class="details-page-filter-bar">
    <ui5-title level="H3">Products</ui5-title>

    <div class="details-page-filter-bar-actions">
      <ui5-input class="details-page-searchfield" placeholder="Search" @input="$emit('filter', $event.target.value)">
        <ui5-icon slot="icon" src="sap-icon://search"></ui5-icon>
      </ui5-input>

      <ui5-button design="Transparent" title="Create Product">Create</ui5-button>
      <ui5-button icon="sap-icon://sort-descending" design="Transparent" title="Sort By Status"></ui5-button>
      <ui5-button icon="sap-icon://sort-ascending" design="Transparent" title="Sort By Status"></ui5-button>
      <ui5-button icon="sap-icon://excel-attachment" design="Transparent"></ui5-button>
    </div>
  </div>
</template>

<style scoped>
.details-page-filter-bar {
	flex-wrap: wrap;
	display: flex;
	justify-content: space-between;
}

.detail-page-header-menu {
	border: 1px solid var(--sapUiListTableGroupHeaderBorderColor, #d9d9d9);
}

.details-page-filter-bar-actions {
	display: flex;
	flex: auto;
	justify-content: flex-end;
	padding-bottom: 0.25rem;
	max-width: 100%;
	flex-wrap: wrap;
}

.details-page-filter-bar-actions > *:not(:last-child) {
	margin-right: 0.25rem;
}

.details-page-searchfield {
	width: auto;
}
</style>