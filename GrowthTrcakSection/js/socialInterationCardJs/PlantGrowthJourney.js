function loadJourneyData(data) {
    data.forEach(item => {
        const milestone = document.getElementById(`m-${item.day}`);
        if (milestone) {
            milestone.classList.add('completed');
            const img = milestone.querySelector('.post-img');
            const icon = milestone.querySelector('i:not(.fa-check):not(.fa-heart)');

            if (item.img) {
                img.src = item.img;
                img.style.display = 'block';
                if (icon) icon.style.display = 'none';
            }
        }
    });
}

// --- Backend Mock Data Example ---
const myPlantJourney = [
    { day: 0, img: 'https://images.unsplash.com/photo-1599685315640-9ce04618a881?w=200' }, // හිටවපු දවස
    { day: 7, img: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?w=200' }  // සතියකට පසු
];

window.onload = () => {
    loadJourneyData(myPlantJourney);
};