//YOUR FIREBASE LINKS
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




     function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name + "</h4>";
message_with_tag = "<h4>" + message + "</h4>";
like_button ="<button id= "+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-heart'>Like: "+ like +"</span></button><hr>";

row + name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;



//End code
      } });  }); }
getData();

function updateLike(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) +1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes

});

}


function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"

}