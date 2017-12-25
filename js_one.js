function addNumbers() {
    var Num1 =parseInt (document.getElementById("num1").value);
    var Num2 = parseInt(document.getElementById("num2").value);




   if (isNaN(Num1)) {

        alert("please enter value in field one ");
        
        return;
    }
   
  else  if (isNaN(Num2)) {

        alert("please enter value in field two");

        return;
    }

   




    var sum = Num1 + Num2;
    document.getElementById("results").value = sum;



}


function email_Extract() {
    var Num1 = document.getElementById("num1").value;

   

    if (Num1.indexOf('@') == -1) {
        alert('please enter a valid email address');
        return;
    }
    
    document.getElementById("num2").value = Num1.substring(0, Num1.indexOf("@"));
    document.getElementById("results").value = Num1.substring(Num1.indexOf("@")+1);

}

function email_Refresh() {
    
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("results").value = "";

}