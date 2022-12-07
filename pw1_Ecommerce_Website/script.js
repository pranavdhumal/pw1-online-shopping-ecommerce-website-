let hamBtn = document.getElementById("hamBurger");
let navBar = document.getElementById("navListItems");
let closeBtn = document.getElementById("arrowClose");
let selectAll = document.getElementById("selectAll");

if (hamBtn) {
  hamBtn.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}
if (arrowClose) {
  arrowClose.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}
if (selectAll) {
  selectAll.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}



// Product Details Code








// client side form validation





function formValidate() {
  
  let username = document.getElementById("userName").value;
  let usermail = document.getElementById("userMail").value;
  let usersub = document.getElementById("userSub").value;
  let usermsg = document.getElementById("userMsg").value;

  let check = 1;



  // Username validation  
  if (username == "") {
    document.getElementById("spn1").innerHTML = "* Username can't be blancked !";
    check = 0;
    
  } else if (username.length < 3) {
    document.getElementById("spn1").innerHTML = "* Username must be equal or greater than  characters !";
    check = 0;
   
  } else {
    document.getElementById("spn1").innerHTML = "";
    check = 1;
    
  }


  // Email id validation

  let atIndex = usermail.indexOf("@");
  let dotIndex = usermail.lastIndexOf(".");


  if (usermail == "") {
    document.getElementById("spn2").innerHTML = "Email filed can't be blancked !";
    check = 0;
  } else if (atIndex <= 1) {
    document.getElementById("spn2").innerHTML = "* Invalid Email entered !";
    check = 0;
  } else if (dotIndex >= usermail.length - 2) {
    document.getElementById("spn2").innerHTML = "* Please input a correct email id";
    check = 0;
  } else if (dotIndex <= atIndex + 2) {
    document.getElementById("spn2").innerHTML = "* You have entered a invalid email id again !";
    check = 0;
  } else {
    document.getElementById("spn2").innerHTML = "";
    check = 1;
  }

// Subject validation
  

  if (usersub == "") {
    document.getElementById("spn3").innerHTML = "* Subject filed can't be empty !";
    check = 0;
   
  } else if (usersub.length <= 5) {
    document.getElementById("spn3").innerHTML = "* Subject characters should br greater than or equal to 5 !";
    check = 0;
    
  } else {
    document.getElementById("spn3").innerHTML = "";
    check = 1;
  };





  // Message Validation

  


  if (usermsg == "") {
    document.getElementById("spn4").innerHTML = " *Message filed can't be empty !";
    check = 0;

  } else if (usermsg.length <= 10) {
    document.getElementById("spn4").innerHTML = "* Elaborate your concern properly, minimum 10 cahractrs required !";
    check = 0;

  } else {
    document.getElementById("spn4").innerHTML = "";
    check = 1;
    }

 

  if (check) {
    return true;
  } else {
    return false;
 }
  
}









 

 

 

  
 














