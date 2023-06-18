function onclick()
{
    var textarea1 = document.getElementById("t1").value;
    var textarea2 = document.getElementById("t2").value;
    if (textarea1 == "") {
      document.getElementById("text1").innerHTML =
        "*Please enter agenda*";
      return false;
    }
        alert('Submitted Sucessfully !!!');

    textarea1="";
    textarea2="";
}