document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');

        // Collapse all other accordions
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            }
        });

        // Toggle the current accordion
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            accordionContent.style.maxHeight = null;
        } else {
            accordionItem.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Dynamically set height
        }
    });
});
