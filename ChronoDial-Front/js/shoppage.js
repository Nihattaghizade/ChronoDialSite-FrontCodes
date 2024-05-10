"use strict";

// Get all elements with class 'eachfilterinnercontainer'
var filterContainers = document.querySelectorAll('.eachfilterinnercontainer');

// Add click event listener to each filter container
filterContainers.forEach(function(container) {
    container.addEventListener('click', function() {
        // Toggle the class 'active' on the next sibling element
        this.nextElementSibling.classList.toggle('show');
    });
});


