// Dit is een eenvoudige functie die je winkelwagentje kan bijwerken.
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Cursus toegevoegd aan winkelwagentje!");
    });
});

// Zoek naar alle "Meer info"-knoppen
const moreInfoButtons = document.querySelectorAll('.more-info');

// Voeg een klik-eventlistener toe aan elke knop
moreInfoButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Zoek de parent div met de cursus
        const course = this.closest('.course');
        
        // Toggle de 'expanded' class om de details zichtbaar of onzichtbaar te maken
        course.classList.toggle('expanded');
        
        // Wijzig de tekst van de knop afhankelijk van de status
        if (course.classList.contains('expanded')) {
            this.textContent = 'Minder info';
        } else {
            this.textContent = 'Meer info';
        }
    });
});
