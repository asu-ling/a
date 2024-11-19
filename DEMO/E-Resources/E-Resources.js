// 定義切換內容的函數
function showContent(tabId) {
    // 隱藏所有標籤內容
    const allContents = document.querySelectorAll('.Esearch-form');
    allContents.forEach(content => {
        content.style.display = 'none';
    });

    // 顯示指定的標籤內容
    document.getElementById(tabId).style.display = 'block';

    // 移除所有標籤按鈕的 "active" 樣式
    const allTabs = document.querySelectorAll('.about-nav .menu-item a');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 為點擊的標籤按鈕添加 "active" 樣式
    document.querySelector(`.about-nav .menu-item a[onclick="showContent('${tabId}')"]`).classList.add('active');
}

// 預設顯示 "電子資源查詢" 頁面
document.addEventListener("DOMContentLoaded", function() {
    showContent('Eresource-search');
});

//左側欄位
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const toggleIcon = section.previousElementSibling.querySelector('.toggle-icon');

    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        toggleIcon.textContent = '▲';
    } else {
        section.style.display = 'none';
        toggleIcon.textContent = '▼';
    }
}

// 初始化將所有 filter-items 隱藏
document.querySelectorAll('.filter-items').forEach((section) => {
    section.style.display = 'none';
});


// document.addEventListener("DOMContentLoaded", function () {
//     const itemsPerPage = 5; // 每頁顯示 5 個項目
//     const eventList = document.querySelector("#event-item");
//     const pagination = document.querySelector(".pagination");
//     //const eventItems = Array.from(eventList.children); // 將所有 event-item 放入陣列
//     let currentPage = 1;
//     const totalPages = Math.ceil(eventList.length / itemsPerPage);

//     // 顯示指定頁面的項目
//     function showPage(pageNumber) {
//         // 隱藏所有項目
//         eventItems.forEach((item, index) => {
//             item.style.display = "none";
//         });

//         // 計算當前頁面要顯示的範圍
//         const start = (pageNumber - 1) * itemsPerPage;
//         const end = start + itemsPerPage;

//         // 顯示該範圍內的項目
//         eventItems.slice(start, end).forEach(item => {
//             item.style.display = "block";
//         });

//         // 更新分頁按鈕樣式
//         Array.from(pagination.children).forEach((button, index) => {
//             button.classList.toggle("active", index === pageNumber - 1);
//         });
//     }

//     // 生成分頁按鈕
//     function createPagination() {
//         for (let i = 1; i <= totalPages; i++) {
//             const button = document.createElement("button");
//             button.textContent = i;
//             button.addEventListener("click", () => showPage(i));
//             if (i === 1) button.classList.add("active"); // 預設選中第一頁
//             pagination.appendChild(button);
//         }
//     }

//     // 初始化
//     createPagination();
//     showPage(1);
// });

// 模擬報名功能
// function register() {
//     alert("報名成功！");
// }
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 10; // 每頁顯示的項目數
    const eventList = document.querySelectorAll('#Ecollection-search .event-item'); // 只選取電子資料庫中的事件項目   
    const paginationContainer = document.querySelector('#Ecollection-search .pagination'); // 只選取電子資料庫中的分頁區域
    // const eventList = document.querySelectorAll('.event-item'); // 獲取所有事件項目
    //const paginationContainer = document.querySelector('.pagination');
    let currentPage = 1;
    const totalPages = Math.ceil(eventList.length / itemsPerPage);

    // 顯示指定頁面的項目
    function showPage(page) {
        // 計算顯示範圍
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // 隱藏所有項目
        eventList.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // 更新頁碼按鈕
        updatePaginationButtons(page);
    }

    // 創建分頁按鈕
    function updatePaginationButtons(page) {
        paginationContainer.innerHTML = ''; // 清空舊的分頁按鈕

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            button.classList.add('page-btn');
            if (i === page) button.classList.add('active');

            // 點擊按鈕切換頁面
            button.addEventListener('click', function () {
                currentPage = i;
                showPage(currentPage);
            });

            paginationContainer.appendChild(button);
        }
    }

    // 初始化顯示第一頁
    showPage(currentPage);
});



