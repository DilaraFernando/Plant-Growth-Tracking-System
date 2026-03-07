function sendFeedback(plant, id) {
    const input = document.getElementById('input-' + id);
    const val = input.value.trim();
    if(!val) return;

    // 1. Add Alert (Top Right)
    const alertStack = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = 'pill-alert';
    alert.innerHTML = `<i class="fas fa-comment"></i> <span><strong>${plant}:</strong> ${val}</span>`;
    alertStack.appendChild(alert);

    // 2. Add to Activity Sidebar (Left)
    const actList = document.getElementById('activity-list');
    const item = document.createElement('div');
    item.className = 'activity-item slide-in';
    item.innerHTML = `
                <img src="https://ui-avatars.com/api/?name=User&background=3b82f6&color=fff" alt="User">
                <div class="act-info">
                    <strong>New Feedback</strong>
                    <span>Someone commented on ${plant}</span>
                    <small>Just now</small>
                </div>
            `;
    actList.prepend(item);

    input.value = "";
    setTimeout(() => {
        alert.style.opacity = '0';
        setTimeout(() => alert.remove(), 500);
    }, 4000);
}