document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.alert-card').style.display = 'none';
    });
});


const greenhouseData = {
    metrics: {
        temp: "23.4",
        sun: "6.5",
        moisture: 51,
        lux: "1,450"
    },
    insights: {
        co2: 412,
        ph: 6.7
    },
    limit: 62
};

document.addEventListener('DOMContentLoaded', () => {
    initDashboard(greenhouseData);

    // Close Alert Logic
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.alert-card');
            card.style.opacity = '0';
            setTimeout(() => card.remove(), 300);
        });
    });
});

function initDashboard(data) {
    // Update Metrics
    document.querySelector('#airTempBox .metric-value').innerText = `${data.metrics.temp}°C`;
    document.querySelector('#moistureBox .metric-value').innerText = `${data.metrics.moisture}%`;

    // Update Progress
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = `${data.limit}%`;
    progressFill.innerText = `${data.limit}% of daily limit`;

    // Update Gauges (CO2 example)
    renderGauge('co2Gauge', data.insights.co2, 1000, '#2e7d32');
    renderGauge('phGauge', data.insights.ph, 14, '#1e88e5');
}

function renderGauge(id, value, max, color) {
    const percent = (value / max) * 100;
    const gauge = document.getElementById(id);
    const ring = gauge.querySelector('.gauge-ring');
    ring.style.background = `conic-gradient(${color} 0% ${percent}%, #f1f5f9 ${percent}% 100%)`;
    gauge.querySelector('.gauge-value').innerText = value;
}