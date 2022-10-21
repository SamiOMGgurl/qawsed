
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAU4z5Ig2wSuu7MalW7Ldk4KTj6jljYw1E",
      authDomain: "zwitter-2f66d.firebaseapp.com",
      databaseURL: "https://zwitter-2f66d-default-rtdb.firebaseio.com",
      projectId: "zwitter-2f66d",
      storageBucket: "zwitter-2f66d.appspot.com",
      messagingSenderId: "955149436835",
      appId: "1:955149436835:web:cba6962035429b8bb4bc16"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"

}

