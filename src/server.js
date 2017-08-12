var connector = require('./app/connector');
var subscriber = require('./app/connector');

// Globals variables
var accountId = null;
var account_token = null;
var client_token = null;
var lsEndpoint = null;
var lsClient;
var ticketSubscription;
var accountSubscription;

lsClient = new connector.connectToLightstreamer

var ls = require('lightstreamer-client');
var lsClient = new ls.LightstreamerClient("http://localhost:8080", "DEMO");

myClient.addListener({
  onStatusChange: function (newStatus) {
    console.log(newStatus);
  }
});

myClient.connect();

var mySubscription = new ls.Subscription("MERGE", ["item1", "item2", "item3"], ["stock_name", "last_price"]);
mySubscription.setDataAdapter("QUOTE_ADAPTER");
mySubscription.setRequestedSnapshot("yes");

mySubscription.addListener({
  onSubscription: function () {
    console.log("SUBSCRIBED");
  },
  onUnsubscription: function () {
    console.log("UNSUBSCRIBED");
  },
  onItemUpdate: function (obj) {
    console.log(obj.getValue("stock_name") + ": " + obj.getValue("last_price"));
  }
});

myClient.subscribe(mySubscription);