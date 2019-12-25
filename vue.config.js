module.exports = {
    devServer: {
      proxy: {
        "^/Products": {
          target: 'http://services.odata.org/V2/Northwind/Northwind.svc/'
        }
      }
    }
  };