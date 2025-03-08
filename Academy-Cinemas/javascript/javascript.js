//initilizes popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function(element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//Initilize toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

//function to display toast with selected options
function displaySelectedMovieOptions(){
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets(){
    displaySelectedMovieOptions();
}

function loading(){
    //hides buy tickets button
    document.getElementById("press").style.display ="none";

    //show the "Spinner..."" button"
    document.getElementById("spinner").style.display = "inline-block";

    //timing
    setTimeout(function(){
        buyTickets();
            document.getElementById("press").style.display ="inline-block";
            document.getElementById("spinner").style.display = "none";
        }, 2000);//miliseconds
}
//JQuery

//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function(){
    //when the webpage is scrolled down from the top by 50px this if statement will trigger
    if ($(document).scrollTop()>50){
        //once the 50px requirement has been met add the nav-shrink class selector to the same html element that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu to accomodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or is back at t;he top the nav-shrink class selector is removed from the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //the margin for the drop down menu is now returned to is original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});