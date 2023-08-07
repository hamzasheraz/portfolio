    // Setting up the Variables
    var bars = document.getElementById("nav-action");
    var nav = document.getElementById("nav");

    // Get all anchor links within the navigation menu
    var anchorLinks = nav.querySelectorAll('a');

    // Setting up the listener for bars
    bars.addEventListener("click", barClicked, false);

    // Setting up the listener for anchor links
    anchorLinks.forEach(function (link) {
        link.addEventListener("click", anchorLinkClicked);
    });

    // Setting up the clicked Effect for bars
    function barClicked() {
        bars.classList.toggle('active');
        nav.classList.toggle('visible');
    }

    // Function to close the navigation menu when an anchor link is clicked
    function anchorLinkClicked() {
        bars.classList.remove('active');
        nav.classList.remove('visible');
    }