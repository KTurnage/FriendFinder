// Loading Data: linking to friends.js.
var friends = require("../data/friends");


// ROUTING
module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

  // API POST Requests
  // Below code handles when a user clicks submit button after answering all questions.
  // The answers are added and totaled. (loop through)
  
  // Compare user total to frieds array totals, and chose closest match. (loop through)
  // After closest match is chosen, push the name and photo of friend to modal.
  // In each of the below cases, when a user submits form data (a JSON object)
  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var userScores = userData.score;
    var userName = userData.name;
    var userPhoto = userData.photo;
  
  // variable for user score
  
  // use this object to hold the best friend match. This will constantly update as it loops thru options
  var bestFriendMatch = {
    name:"",
    photo:"",
    friendDifference: Infinity
  };
  for (i=0; i < friends.length; i++) {
    var currentFriend = friends[i];
    var difference = 0;
    for (j=0; j < currentFriend.scores.length; j++) {
      var possibleFriendScore = currentFriend.scores[j];
      var userScore = userScores[j];
      difference += Math.abs(parseInt(userScore) - possibleFriendScore)
    }
    if (difference <= bestFriendMatch.friendDifference) {
      bestFriendMatch.name = currentFriend.name;
      bestFriendMatch.photo = currentFriend.photo;
      bestFriendMatch.friendDifference = difference;
    } 
  };
  
  res.json(bestFriendMatch);
  friends.push(userData);
});

};