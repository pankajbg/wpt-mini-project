function validation(){
    let username=document.querySelector("#uname").value;
    let password=document.querySelector("#pass").value;
   
    if (username == "") {
        document.getElementById("ffname").innerHTML =
          "*Please enter username*";
        return false;
      }
      if (username.length <= 2) {
        document.getElementById("ffname").innerHTML =
          "*Please enter more than two alphabets*";
        return false;
      }
      if (/[A-Z]/.test(username)){
        document.getElementById("ffname").innerHTML =
        "*Please enter username without upper case character*";
      return false;
     }
      if (!isNaN(username) || /\d/.test(username)) {
        document.getElementById("ffname").innerHTML =
          "*Please write alphabets only*";
        return false;
      } else {
        document.getElementById("ffname").innerHTML = "";
      }
    
  
    if (password == ""){
        document.getElementById("ppword").innerHTML =
        "*Please enter password*";
      return false;
     }

    if (password.length<8){
        document.getElementById("ppword").innerHTML =
        "*Please enter password of atleast 8 characters*";
      return false;
     }

     if (password.search(/[0-9]/)==-1){
        document.getElementById("ppword").innerHTML =
        "*Please enter password of atleast 1 numeric character*";
      return false;
     }
     if (password.search(/[a-z]/)==-1){
        document.getElementById("ppword").innerHTML =
        "*Please enter password of atleast 1 lower case character*";
      return false;
     }
     if (password.search(/[A-Z]/)==-1){
        document.getElementById("ppword").innerHTML =
        "*Please enter password of atleast 1 upper case character*";
      return false;
     }

     if (password.search(/[!\@\#\$\%\&\*\(\)\-\+\=\<\,\>\?]/)==-1){
        document.getElementById("ppword").innerHTML =
        "*Please enter password of atleast 1 special symbol*";
      return false;
     }
     
     else {
        document.getElementById("ppword").innerHTML = "";
      }
 if(conpasword != password ){
    document.getElementById("ccpword").innerHTML =
    "*Please not matched*";
  return false;
 }
 else {
    document.getElementById("ccpword").innerHTML = "";
  }

  username.value="";
  password.value="";
}
