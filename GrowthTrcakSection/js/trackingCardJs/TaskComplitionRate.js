function updateCompletionRate(percent) {
    // UI අංග තෝරා ගැනීම
    const valueDisplay = document.getElementById('percentage-value');
    const fillBar = document.getElementById('progress-fill');

    // Progress line එකේ දිග (width) ප්‍රතිශතය අනුව වෙනස් කිරීම
    fillBar.style.width = percent + '%';

    // සංඛ්‍යා update කිරීම (Animation එකක් සමඟ)
    let current = 0;
    const interval = setInterval(() => {
        if (current >= percent) {
            clearInterval(interval);
            valueDisplay.innerText = `${percent}%`;
        } else {
            current++;
            valueDisplay.innerText = `${current}%`;
        }
    }, 10);
}

// --- පද්ධතිය පරීක්ෂා කිරීම සඳහා ---
// Backend එකෙන් දත්ත ලැබුණාම මෙලෙස Call කරන්න:
// උදාහරණයක් ලෙස: 92% සහ "Tomato T-01"
setTimeout(() => {
    updateCompletionRate(92);
}, 500);