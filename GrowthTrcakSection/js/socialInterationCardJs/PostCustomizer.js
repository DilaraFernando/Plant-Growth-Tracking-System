function updateLabels(data) {
    document.getElementById('lbl-name').innerText = data.species;
    document.getElementById('lbl-age').innerText = `Day ${data.day} Growth`;
    document.getElementById('lbl-health').innerText = `${data.health}% Vitality`;
    document.getElementById('lbl-owner').innerText = data.owner + "'s Garden";
}

// Example function to show dynamic changes
function randomizeData() {
    const mockData = {
        species: "Cherry Tomato",
        day: Math.floor(Math.random() * 30),
        health: 90 + Math.floor(Math.random() * 10),
        owner: "Dilara"
    };
    updateLabels(mockData);
}