var config = {
    apiKey: "AIzaSyDZj0jc50JSya0wXYXb4UVYieuTi3ivwF8",
    authDomain: "anil-s-db.firebaseapp.com",
    databaseURL: "https://anil-s-db.firebaseio.com",
    projectId: "anil-s-db",
    storageBucket: "anil-s-db.appspot.com",
    messagingSenderId: "339399134349"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var currenttime = moment();

  database.ref().on("child_added", function(childSnap) {

    var name = childSnap.val().name;
    var destination = childSnap.val().destination;
    var firstTrain = childSnap.val().firstTrain;
    var frequency = childSnap.val().frequency;
    var min = childSnap.val().min;
    var next = childSnap.val().next;

    $("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
});