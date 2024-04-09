document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a");
    const backgroundSlide = document.getElementById("backgroundSlide");
    let highlightedLink = document.querySelector("#navbar .highlighted");

    // Function to calculate the position of the highlighted navbar
    function calculatePosition(link) {
        const linkWidth = link.offsetWidth;
        const linkLeft = link.offsetLeft + (link.offsetWidth / 2);
        backgroundSlide.style.width = `${linkWidth}px`;
        backgroundSlide.style.left = `${linkLeft}px`;
    }

    // Initialize position based on the initially highlighted link
    calculatePosition(highlightedLink);

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Slide the background to the clicked link
            calculatePosition(link);

            // Remove the 'highlighted' class from all links
            navbarLinks.forEach(link => {
                link.classList.remove("highlighted");
            });

            // Add the 'highlighted' class to the clicked link
            link.classList.add("highlighted");

            // Update highlightedLink to the clicked link
            highlightedLink = link;

            // Simulate link navigation after animation (optional)
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // Adjust the timeout duration as needed to match the animation duration
        });
    });

    // Recalculate position on window resize
    window.addEventListener("resize", function() {
        calculatePosition(highlightedLink);
    });
});
