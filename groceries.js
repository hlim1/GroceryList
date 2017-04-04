function addItem()
{
  var input    = document.getElementById("newItem").value;
  var list     = document.getElementById("listDisplay");
  var item     = document.createElement("li"); // Create a <li> node
  var itemName = document.createTextNode(input); //create a text node with the value of input variable

  item.appendChild(itemName); // Append itemName to <li> item
  list.appendChild(item); // Append item to <ul> list

  // Setting the value to the empty string so 
  //that what the user typed in is no longer shown in the text box
  document.getElementById("newItem").value = ""; 
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
