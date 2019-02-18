// ===============================================================================
// LOAD DATA
// Linking routes "data" source -> friends.js
// These data source hold the 'friendsArray' array of information
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page. When a user visits the 
    // link $/api/friends it will receive a JSON of the data in the 'friendsArray'
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the 
    // server. When a user submits form data (a JSON object) the JSON is pushed 
    // to the 'friendsArray'.
    // ---------------------------------------------------------------------------

    app.post("/api/tables", function (req, res) {
        friends.push(req.body);
    });
};