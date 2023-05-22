function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Aquí va el código para mostrar el formulario cuando el usuario inicia sesión
// Por ejemplo:
function mostrarFormulario() {
  document.getElementById("myForm").removeAttribute("hidden");
}

var firebaseConfig = {
  apiKey: "AIzaSyC9q3x8-VhVb-Rwzbu_4pqeUuXPurwfDQs",
authDomain: "grupo2desam.firebaseapp.com",
projectId: "grupo2desam",
storageBucket: "grupo2desam.appspot.com",
messagingSenderId: "813434082041",
appId: "1:813434082041:web:9e8ca3df6743559ca2c828",
measurementId: "G-TH4BYES2YV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
 function enviar(){
     var email=document.getElementById('email').value;
     var pass=document.getElementById('pass').value;
    // alert("email="+email+"pass="+pass);

    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
       var errorCode= error.code;
       var errorMessage = error.message;
       alert(errorMessage);
     });
 }
var inputs = document.getElementsByClassName("formulario__input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function(){
      if(this.value.length>=1){
          this.nextElementSibling.classList.add("fijar");
      }else {
          this.nextElementSibling.classList.remove("fijar")
      }
  });
}