<template>
  <div class="detail-page">
    <main class="detail-page-content">
      <ui5-table>
        <ui5-table-column slot="columns">
          <ui5-label class="table-column-header-content">Product</ui5-label>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <ui5-label class="table-column-header-content">Price</ui5-label>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <ui5-label class="table-column-header-content">Location</ui5-label>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <ui5-label class="table-column-header-content">
            Order
            date
          </ui5-label>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <ui5-label class="table-column-header-content">Image</ui5-label>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <ui5-label class="table-column-header-content">Status</ui5-label>
        </ui5-table-column>

        <ui5-table-row :key="item.key" v-for="item of filteredProducts">
          <ui5-table-cell>
            <ui5-label class="table-cell-content">
              <b>{{item.name}}</b>
            </ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{item.price}}</span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{item.location}}</span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{item.orderDate}}</span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">
              <img alt class="image-cell" :src="getProductImage(item.img)" />
            </span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">
              <ui5-badge color-scheme="0">{{item.status}}</ui5-badge>
            </span>
          </ui5-table-cell>
        </ui5-table-row>
      </ui5-table>
    </main>
  </div>
</template>

<script>
import products from "../data/products.json";

// These are the web components that we will be using here
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Badge";
import "@ui5/webcomponents/dist/Dialog";
import "@ui5/webcomponents/dist/Popover";
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/TextArea";

export default {
  name: "detail",
  components: {},
  data: function() {
    return {
      products: [...products],
      filteredProducts: [...products],
      filterType: "all"
    };
  },
  methods: {
    getProductImage(img) {
      return img.startsWith("http") ? img : require(`@/assets${img}`);
    }
  }
};
</script>

<style scoped>
.detail-page-content {
  padding: 3rem;
}

.table-column-header-content,
.table-cell-content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}

.image-cell {
  height: 3rem;
  width: 3rem;
}
</style>