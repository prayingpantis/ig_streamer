module.exports = {
    /*
     * Function to connect to Lightstreamer
     */
    connectToLightstreamer: function () {
        // Instantiate Lightstreamer client instance
        console.log("Connecting to Lighstreamer: " + lsEndpoint);
        lsClient = new LightstreamerClient(lsEndpoint);

        // Set up login credentials: client
        lsClient.connectionDetails.setUser(accountId);

        var password = "";
        if (client_token) {
            password = "CST-" + client_token;
        }
        if (client_token && account_token) {
            password = password + "|";
        }
        if (account_token) {
            password = password + "XST-" + account_token;
        }
        console.log(" LSS login " + accountId + " - " + password);
        lsClient.connectionDetails.setPassword(password);

        // Add connection event listener callback functions
        lsClient.addListener({
            onListenStart: function () {
                console.log('Lightstreamer client - start listening');
            },
            onStatusChange: function (status) {
                console.log('Lightstreamer connection status:' + status);
            }
        });

        // Allowed bandwidth in kilobits/s
        //lsClient.connectionOptions.setMaxBandwidth();

        // Connect to Lightstreamer
        lsClient.connect();
    }
}