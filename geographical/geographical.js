document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');

    thematicalTrigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation(); // Prevent Bootstrap interference
        const isExpanded = thematicalMenu.classList.contains('show');
        thematicalMenu.classList.toggle('show', !isExpanded);
    });

    // Prevent menu from closing when clicking inside
    thematicalMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!thematicalTrigger.contains(e.target) && !thematicalMenu.contains(e.target)) {
            thematicalMenu.classList.remove('show');
        }
    });
});
