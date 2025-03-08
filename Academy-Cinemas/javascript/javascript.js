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