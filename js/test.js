var userName=document.getElementById('signUpname')
var userEmail=document.getElementById('signUpemail')
 var userPass=document.getElementById('signUppass')

var usersArray=[];
var userData={};
function signUp(){

     userData={
        name:userName.ariaValueMax,
        email:userEmail.value,
        pass:userPass.value

    }
 

   
  check()
    
}

function check() {
    for (var i = 0; i < usersArray.length; i++) {
      if (usersArray[i].email == userData.email) {
        alert('Email already exists!');
        return; 
      }
    }
    usersArray.push(userData);
    console.log(usersArray);
  }

