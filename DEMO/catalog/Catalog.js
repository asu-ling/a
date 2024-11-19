function showContent(sectionId) {
    // 隱藏所有內容區塊
    const contentSections = document.querySelectorAll('.Collection-section');
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
    
        // 如果點擊的是 "每月新書"，則重置為初始狀態
    if (sectionId === 'NewBook') {
        resetToInitialState();
    }
}

 // 預設顯示本館公告內容
 document.addEventListener('DOMContentLoaded', () => {
    showContent('Search');
});


// 切換查詢表單的顯示和隱藏
// function toggleSearchForm() {
//     const searchContainer = document.getElementById("Search");
//     const button = document.querySelector(".toggle-button button");

//     if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
//         searchContainer.style.display = "block";
//         button.innerText = "隱藏查詢條件";
//     } else {
//         searchContainer.style.display = "none";
//         button.innerText = "顯示查詢條件";
//     }
// }

// 查詢功能 (暫時模擬)
function search() {
    alert("執行查詢...");
}

// 清除所有輸入欄位
function clearFields() {
    const inputs = document.querySelectorAll(".Collection-form input[type='text']");
    inputs.forEach(input => input.value = "");
}

// 重置表單為原始條件
function resetFields(event) {
    event.preventDefault();  // 阻止默認的連結跳轉行為

    // 重置所有輸入框
    const inputs = document.querySelectorAll(".Collection-form input[type='text']");
    inputs.forEach(input => input.value = "");

    // 重置所有下拉選單
    const selects = document.querySelectorAll(".Collection-form select");
    selects.forEach(select => {
        select.selectedIndex = 0;  // 重置為第一個選項
    });

    alert("已重置為原始條件");
}

// 綁定原始條件連結的點擊事件
document.querySelector(".reset-link").addEventListener("click", resetFields);


/* NEW BOOK */
  // 篩選出版物年份
  function filterByYear(year) {
    const items = document.querySelectorAll("#book-list tr");

    items.forEach(item => {
        if (year === 'all' || item.getAttribute("data-year") == year) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });

        // 更新年份按鈕的選中狀態
    document.querySelectorAll('.year-filter button').forEach(button => {
            button.classList.remove('active-year');
    });

        // 使用 JavaScript 查找並添加選中樣式
    const activeButton = document.querySelector(`.year-filter button[onclick="filterByYear('${year}')"]`) 
                          || document.querySelector(`.year-filter button[onclick="filterByYear(${year})"]`);
                          
    activeButton?.classList.add('active-year');
}

    // 重置到初始狀態的函數
function resetToInitialState() {
    // 清除年份篩選的樣式
    document.querySelectorAll('.year-filter button').forEach(button => {
        button.classList.remove('active-year');
    });

    // 顯示所有的書籍項目
    const items = document.querySelectorAll("#book-list tr");
    items.forEach(item => {
        item.style.display = "";
    });

    // 可選：讓"全部"按鈕顯示選中狀態
    document.querySelector('.year-filter button[onclick="filterByYear(\'all\')"]').classList.add('active-year');
}

// 模擬分頁功能（示範用）
function showPage(pageNumber) {
    alert("顯示第 " + pageNumber + " 頁");
    
    // 更新分頁按鈕的樣式
    document.querySelectorAll('.pagination button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.pagination button:nth-child(${pageNumber})`).classList.add('active');
}
// function filterByYear(year) {
//     const items = document.querySelectorAll(".image-cell");

//     items.forEach(item => {
//         // 如果出版物的年份符合篩選條件則顯示，否則隱藏
//         if (item.getAttribute("data-year") == year) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }
