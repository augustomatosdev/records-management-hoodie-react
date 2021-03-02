var Hoodie = require("@hoodie/client");
var Store = require("@hoodie/store-client");

export const PresetStore = Store.defaults({
  PouchDB: require("pouchdb-browser").default,
  remoteBaseUrl: "http://localhost:5984",
});
