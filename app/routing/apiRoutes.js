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
    // server. When a user submits form data (a JSON object) the JSON is compared
    // to the rest of the elements in the array (the friend pull) and the closest
    // friend will be returned. The New Data will also be pushed to the 
    // 'friendsArray' to be used in future queries.
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        function compareFirends() {

            // console.log("Comparing " + req.body.name);

            // This will be the matched friend
            var matchedFriend;
            // This will be the matched friend score
            var bestMatch = 50;
            
            // We need to check all the elements in the array
            for (let i = 0; i < friends.length; i++) {

                // This variable will keep the compatibility count
                var total = 0;

                // This variable is used for debuging purposes
                var math = [];

                for (let s = 0; s < friends[i].scores.length; s++) {
                    // Then we have to calculate the compatibiliy based on the absolute difference on the scores
                    total += Math.abs(friends[i].scores[s] - req.body.scores[s]);

                    // Keeping track of the math process (for debuging purposes)
                    math.push(Math.abs(friends[i].scores[s] - req.body.scores[s]));
                }
                
                // Display the math process (for debuging purposes)
                // console.log("Vs friend #" + i + "\tName: " + friends[i].name + "\t" + total + " = " + math.join(" + "));

                if (total < bestMatch) {
                    // When found a better match
                    bestMatch = total;

                    // Selecting the best batch
                    matchedFriend = friends[i]
                }
            }

            // console.log("\n\n*******************");
            // console.log("Your new best friend is:");
            // console.log("\tNAME: " + matchedFriend.name);
            // console.log("\tPHOTO: " + matchedFriend.photo);
            // console.log("*******************");

            // Return the JSON object of the matched friend
            return matchedFriend;
        }

        res.json(compareFirends());

        // Adding the new friend to 'friendsArray' 
        friends.push(req.body);

    });
};