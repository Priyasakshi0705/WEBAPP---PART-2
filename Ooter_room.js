var firebaseConfig = {
    apiKey: "AIzaSyD9TDdVSDxKGFaLzQk_wQ16ft9wNKGhiSQ",
    authDomain: "ooter-150fe.firebaseapp.com",
    projectId: "ooter-150fe",
    storageBucket: "ooter-150fe.appspot.com",
    messagingSenderId: "52919974202",
    appId: "1:52919974202:web:7f915d8ba01dc2fec5b803"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() 
  {firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
