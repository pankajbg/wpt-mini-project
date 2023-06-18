function Check()
{
    
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var mobile = document.getElementById("mobile").value;
    var gmail = document.getElementById("email").value;
    if (firstname == "") {
      document.getElementById("ffname").innerHTML =
        "*Please enter First name*";
      return false;
    }
    if (firstname.length <= 2) {
      document.getElementById("ffname").innerHTML =
        "*Please enter more than two alphabets*";
      return false;
    }
    if (!isNaN(firstname) || /\d/.test(firstname)) {
      document.getElementById("ffname").innerHTML =
        "*Please write alphabets only*";
      return false;
    } else {
      document.getElementById("ffname").innerHTML = "";
    }

    if (lastname == "") {
      document.getElementById("llname").innerHTML =
        "*Please enter last name*";
      return false;
    }

    if (lastname.length <= 2) {
      document.getElementById("llname").innerHTML =
        "*Please enter more than two alphabets*";
      return false;
    }
    if (!isNaN(lastname) || /\d/.test(lastname)) {
      document.getElementById("llname").innerHTML =
        "*Please write alphabets only*";
      return false;
    } else {
      document.getElementById("llname").innerHTML = "";
    }
    if (mobile == "") {
      document.getElementById("mmobile").innerHTML =
        "*Please enter mobile-no*";
      return false;
    }
    if (isNaN(mobile)) {
      document.getElementById("mmobile").innerHTML =
        "*Please enter digits only*";
      return false;
    }
    if (mobile.length < 10 || mobile.length > 10) {
      document.getElementById("mmobile").innerHTML =
        "*Please enter a 10-digit mobile number*";
      return false;
    } else {
      document.getElementById("mmobile").innerHTML = "";
    }
    if (gmail == "") {
      document.getElementById("eemail").innerHTML = "*Please enter email*";
      return false;
    }
    if (gmail.indexOf("@") <= 0) {
      document.getElementById("eemail").innerHTML =
        "*Invalid Position of @*";
      return false;
    }
    if (
      gmail.charAt(gmail.length - 4) !== "." &&
      gmail.charAt(gmail.length - 3) !== "."
    ) {
      document.getElementById("eemail").innerHTML =
        "*Invalid Position of dot*";
      return false;
    } else {
      document.getElementById("eemail").innerHTML = "";
    }
    fnameRef.value="";
    lnameRef.value="";
    mobileRef.value="";
    emailRef.value="";
    textRef.value="";
}