function showContent(sectionId) {
    // 隱藏所有內容區塊
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // 顯示被點選的內容區塊
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // 移除所有導航連結的 "active" 樣式
    const menuLinks = document.querySelectorAll('.menu-item a');
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 為點選的導航連結添加 "active" 樣式
    const activeLink = document.querySelector(`.menu-item a[onclick="showContent('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
}

 // 預設顯示本館公告內容
 document.addEventListener('DOMContentLoaded', () => {
    showContent('announcement');
});


//驗證碼
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha-text').innerText = captcha;
    document.getElementById('error-message').innerText = ''; // 清空錯誤訊息
}

// 驗證用戶輸入的驗證碼
function validateCaptcha() {
    const captchaText = document.getElementById('captcha-text').innerText;
    const userInput = document.getElementById('captcha-input').value;

    if (userInput === captchaText) {
        alert('驗證成功！');
        document.getElementById('captcha-input').value = ''; // 清空輸入欄位
        generateCaptcha(); // 生成新的驗證碼
    } else {
        document.getElementById('error-message').innerText = '驗證碼錯誤，請重新輸入！';
        document.getElementById('captcha-input').value = ''; // 清空輸入欄位
    }
}

// 頁面加載時生成驗證碼
window.onload = generateCaptcha;


// 頁面載入時顯示 "本館公告" 的內容
// window.onload = function() {
//     showContent('announcement');
// };

