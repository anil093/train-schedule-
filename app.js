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
$("#addTrainBtn").on("click", function() {

    var trainName = $("#train-input").val().trim();
    var destination = $("#Destination-input").val().trim();
    var firstTrain = $("#firstInput").val().trim();
    var frequency = $("#Frequency-inpu").val().trim();

    //ensures that each input has a value
    if (trainName == "") {
        alert('Enter a train name.');
        return false;
    }
    if (destination == "") {
        alert('Enter a destination.');
        return false;
    }
    if (firstTrain == "") {
        alert('Enter a first train time.');
        return false;
    }
    if (frequency == "") {
        alert('Enter a frequency');
        return false;
    }
});