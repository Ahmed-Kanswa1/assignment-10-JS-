var userName=document.getElementById('signUpname')
var userEmail=document.getElementById('signUpemail')
 var userPass=document.getElementById('signUppass')
 var existInput=document.getElementById('existInput')
 var notExistInput=document.getElementById('notExistInput')
 var allRequiredInputs=document.getElementById('allRequired')

var usersArray=[];
var userData={};

if(localStorage.getItem('login')!=null){
    usersArray=JSON.parse(localStorage.getItem('login'));
}





function signUp(){

     userData={
        name:userName.value,
        email:userEmail.value,
        pass:userPass.value

    }
 

  allRequired()
  
    
}


function check() {
    for (var i = 0; i < usersArray.length; i++) {
      if (usersArray[i].email == userData.email) {
        existInput.classList.replace('hide','show')
        notExistInput.classList.replace('show','hide')
        allRequiredInputs.classList.replace('show','hide')

        return; 
      }
    }
    usersArray.push(userData);
    localStorage.setItem('login',JSON.stringify(usersArray));
    notExistInput.classList.replace('hide','show')
    existInput.classList.replace('show','hide')
    allRequiredInputs.classList.replace('show','hide')
    console.log(usersArray);
  }




  function allRequired(){
    if(userData.name=="" || userData.email=="" || userData.pass ==""){
        
        allRequiredInputs.classList.replace('hide','show')
        existInput.classList.replace('show','hide')
        notExistInput.classList.replace('show','hide')
        return;

    }
    check()
    console.log(userData.name);
  
  }


  //----------------------------------
  //------------Login-----------------
  var loginEmail=document.getElementById('loginEmail')
  var loginPass=document.getElementById('loginPass')
  var wrongEorP=document.getElementById('wrongEorP')



  function logIn(){
    if(localStorage.getItem('login')==null){
      // alert('Sign up first')
      wrongEorP.classList.replace('hide','show');
      allRequiredInputs.classList.replace('show','hide')
    }
    for(var i=0;i<usersArray.length;i++){
        if(loginEmail.value==usersArray[i].email && loginPass.value==usersArray[i].pass){
          wrongEorP.classList.replace('show','hide');
            document.getElementById('loginS').href="index3.html"

           
            var name=usersArray[i].name
            localStorage.setItem('userName',JSON.stringify(name))
            
           
            
            // notExistInput.classList.replace('hide','show')
            // allRequiredInputs.classList.replace('show','hide')
            return;
        }else{
            wrongEorP.classList.replace('hide','show');
            allRequiredInputs.classList.replace('show','hide');
        }
    
    }
    loginAllRequired()
    
  }

  function loginAllRequired(){
    if(loginEmail.value==""||loginPass.value==""){
        allRequiredInputs.classList.replace('hide','show')
        wrongEorP.classList.replace('show','hide');

        notExistInput.classList.replace('show','hide')
        return;
    }

  }

  //------------------------------------
  //--------------Logout----------------

  function logOut(){
    document.getElementById('logout').href="index.html"
    

  }




  (  function getName(){
    var name =JSON.parse(localStorage.getItem('userName'))

     var welcome=` <h1 class="my-5">Welcome ${name} </h1>`
     document.getElementById('Welcome').innerHTML=welcome

    console.log(name);

  })()



// window.addEventListener('load', function() {
//     getName();
//   });
