
var firebaseConfig = {
      apiKey: "AIzaSyB-YwVuRnj7W_nUFHs6-0NFJROn-BGEopA",
      authDomain: "kwitter-550ef.firebaseapp.com",
      projectId: "kwitter-550ef",
      storageBucket: "kwitter-550ef.appspot.com",
      messagingSenderId: "81527978863",
      appId: "1:81527978863:web:fad8edd27bff849959069a",
      measurementId: "G-WTZGS2BN4T"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
