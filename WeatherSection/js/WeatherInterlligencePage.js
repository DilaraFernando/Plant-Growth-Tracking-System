document.addEventListener("DOMContentLoaded", () => {
    const target = 92; // ඔයාගේ Feature එකේ අගය
    const ring = document.getElementById('progress-ring');
    const numberDisplay = document.getElementById('match-number');

    // Circumference Calculation
    const radius = 45;
    const circumference = 2 * Math.PI * radius; // Approx 283

    // පියවර 1: Offset එක ගණනය කර Animation එක පටන් ගැනීම
    const offset = circumference - (target / 100) * circumference;

    setTimeout(() => {
        ring.style.strokeDashoffset = offset;

        // පියවර 2: අංකය 0 සිට 92 දක්වා වැඩි කිරීම
        let count = 0;
        const duration = 1800; // 1.8 seconds
        const increment = target / (duration / 20);

        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                numberDisplay.innerText = target + "%";
                clearInterval(timer);
            } else {
                numberDisplay.innerText = Math.floor(count) + "%";
            }
        }, 20);
    }, 400);
});
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('growthLineChart').getContext('2d');

    // Gradient එක නිර්මාණය කිරීම (Green to Transparent)
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(46, 125, 50, 0.2)');
    gradient.addColorStop(1, 'rgba(46, 125, 50, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Growth (cm)',
                data: [1.2, 1.8, 2.5, 3.1, 4.2, 5.0, 5.8], // Prediction Data
                borderColor: '#2e7d32', // Primary Green
                backgroundColor: gradient,
                fill: true,
                tension: 0.4, // Smooth curve
                borderWidth: 3,
                pointRadius: 4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#2e7d32',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#9ca3af' }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: '#f3f4f6' },
                    ticks: { color: '#9ca3af' }
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // පද්ධතියෙන් ලැබෙන දත්ත අනුව මේවා වෙනස් කළ හැකිය
    const overallRisk = 45;
    const bar = document.getElementById('overall-risk-bar');
    const text = document.getElementById('overall-risk-text');

    // පියවර 1: Progress Bar එක Update කිරීම
    setTimeout(() => {
        bar.style.width = overallRisk + "%";

        // අංකය Animation කිරීම
        let start = 0;
        const interval = setInterval(() => {
            if (start >= overallRisk) {
                clearInterval(interval);
            } else {
                start++;
                text.innerText = start + "%";
            }
        }, 20);
    }, 500);
});
