function updateLeafAnalysis(leafData) {
    const container = document.getElementById('leaf-container');
    const colorText = document.getElementById('leaf-color-text');
    const textureText = document.getElementById('leaf-texture-text');
    const sproutingText = document.getElementById('leaf-sprouting-text');
    const colorDot = document.getElementById('color-dot');

    // Data Replace කිරීම
    colorText.innerText = leafData.color;
    textureText.innerText = leafData.texture;
    sproutingText.innerText = leafData.sprouts;

    // Color එක අනුව Dot එකේ වර්ණය වෙනස් කිරීම (උදාහරණයක් ලෙස)
    if (leafData.color.toLowerCase().includes('yellow')) {
        colorDot.style.backgroundColor = '#eab308'; // Warning color
    } else if (leafData.color.toLowerCase().includes('brown')) {
        colorDot.style.backgroundColor = '#92400e'; // Danger color
    } else {
        colorDot.style.backgroundColor = '#2e7d32'; // Healthy Green
    }

    // Update වූ බව පෙන්වීමට කුඩා animation එකක් එකතු කිරීම
    container.classList.add('update-flash');
    setTimeout(() => container.classList.remove('update-flash'), 1000);
}

// --- Backend Integration Example ---
// Backend එකෙන් data ආවාම මේ විදිහට Call කරන්න:
const mockData = {
    color: "Healthy Green",
    texture: "Firm & Hydrated",
    sprouts: "2 new leaves sprouting"
};

// තත්පර 1කට පසු දත්ත පෙන්වීමට සකස් කර ඇත
setTimeout(() => {
    updateLeafAnalysis(mockData);
}, 1000);
