/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
		if (document.getElementById('same').checked){
              var name= document.getElementById('shippingName').value;
              var zip=document.getElementById('shippingZip').value;
              
               document.getElementById('billingName').value= name;
               document.getElementById('billingZip').value= zip;
      
		}
		else{ 
			document.getElementById('billingName').value="";
			document.getElementById('billingZip').value="";
		}
	}

/*

function billingFunction(){

	if(document.querySelector("#same").checked)
	{
		var name=document.querySelector("#shippingName").value;   //this will copy the value entered by the user in shipping name block
		var zip=document.querySelector("#shippingZip").value;     //this will copy the value entered by the user in shipping zip block

		document.querySelector("#billingName").value=name;   //finally these lines will copy the above initialised variables to the billing address and billing zip
		document.querySelector("#billingZip").value=zip;
	}

	else
	{
		document.querySelector("#billingName").value="";
		document.querySelector("#billingZip").value="";
	}
}

*/





/*
function billingFunction(){
  if (document.getElementById("same").checked){
    // Getting name and zip from the DOM
    var name = document.getElementById("shippingName").value
    var zip = document.getElementById("shippingZip").value
    // Setting name and zip in Billing
    document.getElementById("billingName").setAttribute("value", name)
    document.getElementById("billingZip").setAttribute("value", zip)
  }
  else{
    // returning both to blank inputs
    document.getElementById("billingName").setAttribute("value", "")
    document.getElementById("billingZip").setAttribute("value", "")
  }
}
*/