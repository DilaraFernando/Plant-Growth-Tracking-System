function handleShare() {
    const btn = document.querySelector('.btn-share');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Posting...';

    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Shared Successfully!';
        btn.style.background = '#1a1a1a';
    }, 2000);
}

// Backend එකෙන් දත්ත එනකොට UI එක update කරන්න
function updateSocialPreview(data) {
    document.getElementById('display-day').innerText = `DAY ${data.day}`;
    document.getElementById('post-h').innerText = data.height + ' cm';
    document.getElementById('post-s').innerText = data.health + '%';
    document.getElementById('post-l').innerText = data.leaves;
}

// Example Data (Week 1)
const mockPostData = {
    day: "07",
    height: 12.5,
    health: 96,
    leaves: 8
};

window.onload = () => updateSocialPreview(mockPostData);