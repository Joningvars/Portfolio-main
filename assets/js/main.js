document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealProjects);

    function revealProjects() {
        // Get all project items
        var projectItems = document.querySelectorAll(".project-item");

        projectItems.forEach(function (projectItem) {
            // Calculate the position of the project item relative to the viewport
            var itemTop = projectItem.getBoundingClientRect().top;
            var itemBottom = projectItem.getBoundingClientRect().bottom;

            // Check if the project item is in the viewport
            if (itemTop < window.innerHeight && itemBottom > 0) {
                // Add the 'active' class to trigger the animation
                projectItem.classList.add("active");
            } else {
                // Remove the 'active' class if the project item is not in the viewport
                projectItem.classList.remove("active");
            }
        });
    }
});

var darkButton = document.querySelector('#darkmode-toggle');

function darkToggle() {
    console.log('Dark mode toggled');
    var body = document.querySelector('body');
    body.classList.toggle('dark');
}


