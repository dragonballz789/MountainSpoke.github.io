'string'
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF=urlArray[urlArray.length-1];

if (pageHREF !=="") {
    var menu = document.querySelectorAll('ul #bmenu li a');
    var i;
    //loop through all the menu items in the navigation
    for(i=0 i<menu.length; i++) {
        var currentURL=(menu[i].getAttribute("href"));
        menu[i].parentNode.className=""; //turn off hilighting by default
        if (currentURL===pageHREF) {
            menu[i].parentNode.className="active"; //turn on if a match
        } // end if
    }// end of the serach for a match
}// end of if !==
