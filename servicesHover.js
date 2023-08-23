// Get all the explanations
const explanations = document.querySelectorAll('.explanation');

// Hide all explanations initially
explanations.forEach(explanation => {
    explanation.style.display = 'none';
});

// Get the explanation container
const explanationContainer = document.querySelector('.services-explanation');

// Get all the buttons
const buttons = document.querySelectorAll('.services-button');

// Add event listeners for each button
buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        // Log the index of the hovered button to the console
        console.log('Hovered button index:', index);

        // Hide all explanations
        explanations.forEach(explanation => {
            explanation.style.display = 'none';
        });

        // Show the explanation corresponding to the hovered button
        explanations[index].style.display = 'block';

        // Add the 'show' class to explanation container to trigger transition
        explanationContainer.classList.add('show');
    });

    button.addEventListener('mouseleave', () => {
        // Hide all explanations when the mouse leaves any button
        explanations.forEach(explanation => {
            explanation.style.display = 'none';
        });

        // Remove the 'show' class from explanation container
        explanationContainer.classList.remove('show');
    });
});
