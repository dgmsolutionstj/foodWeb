// Select the element with class 'menu' using querySelector
document.querySelector('.menu').addEventListener('click', () => {

    // Select all elements with class 'target' using querySelectorAll
    document.querySelectorAll('.target').forEach((item) => {

        // Toggle the class 'change' for each 'target' element
        item.classList.toggle('change');

    });

});


// Select all elements with class 'section-1-icon' and 'i'
const icons = document.querySelectorAll('.section-1-icon i')

// Initialize a variable to keep track of the current index
let i = 1

// Set up a setInterval function to run every 3000 milliseconds (3 seconds)
setInterval(() => {

    // Increment the index
    i++

    // Select the element with class 'change' within 'section-1-icon'
    const icon = document.querySelector('.section-1-icon .change')

    // Remove the 'change' class from the currently selected icon
    icon.classList.remove('change')

    // Check if the index exceeds the number of icons
    if(i > icons.length) {

         // If so, add the 'change' class to the first icon and reset the index to 1
        icons[0].classList.add('change')

        i = 1
        
    }else {

        // Otherwise, add the 'change' class to the next sibling of the current icon
        icon.nextElementSibling.classList.add('change')

    }

    
}, 3000)