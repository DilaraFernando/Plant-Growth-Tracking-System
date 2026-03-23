function updatePlantAnalysis(data) {
    // 1. Text සහ Counts Update කිරීම
    document.getElementById('plant-id-display').innerText = `Analyzing Plant: ${data.name}`;
    document.getElementById('leaf-status').innerText = data.leafCondition;
    document.getElementById('stem-height').innerText = `${data.height} cm`;
    document.getElementById('root-status').innerText = data.rootHealth;

    // 2. Footer Stats Update කිරීම
    document.getElementById('count-leaves').innerText = data.totalLeaves;
    document.getElementById('count-health').innerText = `${data.healthScore}%`;
    document.getElementById('count-days').innerText = `Day ${data.age}`;

    // 3. Health එක අඩු නම් UI එකේ වර්ණය වෙනස් කිරීම (Conditional Styling)
    const healthSpan = document.getElementById('count-health');
    if (data.healthScore < 70) {
        healthSpan.style.color = '#ef4444'; // රතු පැහැය
    } else {
        healthSpan.style.color = '#2e7d32'; // කොළ පැහැය
    }
}

// --- පරීක්ෂා කිරීම සඳහා (Testing Purpose) ---
// Backend එකෙන් එන දත්ත මේ ආකාරයට ලැබෙනු ඇතැයි සිතමු:
const mockDataFromBackend = {
    name: "Chili C-05",
    leafCondition: "Vibrant",
    height: 18.2,
    rootHealth: "Strong",
    totalLeaves: 22,
    healthScore: 92,
    age: 21
};

// UI එක Update කිරීමට Function එක Call කරන්න
updatePlantAnalysis(mockDataFromBackend);