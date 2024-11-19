// let currentSlide = 0; // 當前幻燈片索引
// const slides = document.querySelectorAll('.slide'); // 獲取所有幻燈片
// const totalSlides = slides.length; // 幻燈片總數

// function showSlide(index) {
//     // 重新定位所有幻燈片的位置
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${(i - index) * 100}%)`;
//     });
// }

// // 初始化顯示第一張幻燈片
// showSlide(currentSlide);

// function changeSlide(direction) {
//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // 計算新索引
//     showSlide(currentSlide);
// }

// let currentSlide = 0; // 當前幻燈片索引
// const slides = document.querySelectorAll('.slide'); // 獲取所有幻燈片
// const totalSlides = slides.length; // 幻燈片總數
// console.log(totalSlides); // 檢查 totalSlides 的值是否為 3

// function showSlide(index) {
//     console.log(`顯示幻燈片索引: ${index}`); // 除錯資訊
//     // 重新定位所有幻燈片的位置
//     slides.forEach((slide, i) => {
//         console.log(`幻燈片 ${i + 1} 圖片是否加載成功：`, slide.querySelector('img').complete);
//     });
// }

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${(i - index) * 100}%)`;
//     });
//     console.log(`顯示幻燈片索引: ${index}`); // 除錯資訊
// }

// function changeSlide(direction) {
//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//     showSlide(currentSlide);
//     console.log(`切換到幻燈片索引: ${currentSlide}`); // 除錯資訊
// }

// // 初始化顯示第一張幻燈片
// showSlide(currentSlide);

// function changeSlide(direction) {
//     // console.log(`切換方向: ${direction}`); // 確認按鈕是否正確觸發
//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // 計算新索引
//     showSlide(currentSlide);
// }

                                        // 控制Banner左右滑動
let currentSlide = 0; // 初始幻燈片索引
const slides = document.querySelectorAll('.slide'); // 獲取所有幻燈片
const totalSlides = slides.length; // 總幻燈片數量

// 顯示指定索引的幻燈片
function showSlide(index) {
    // 如果索引超過幻燈片數量，重置為第一張
    if (index >= totalSlides) {
        currentSlide = 0;
    } 
    // 如果索引小於0，重置為最後一張
    else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // 隱藏所有幻燈片
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // 顯示當前幻燈片
    slides[currentSlide].style.display = 'block';
}

// 切換幻燈片
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// 初始化顯示第一張幻燈片
showSlide(currentSlide);

// 綁定左右按鈕的事件
document.querySelector('.banner_prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.banner_next').addEventListener('click', () => changeSlide(1));

                                    


/*控制 書籤左右滑動*/
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.book-gallery'); // 書籍展示區
    const books = document.querySelectorAll('.book'); // 所有書籍
    const bookWidth = books[0].offsetWidth + 20; // 每本書的寬度加上間距
    let scrollPosition = 0; // 當前滾動位置

    // 滾動書籍畫廊的函數
    function scrollGallery(direction) {
        // 計算畫廊的最大滾動寬度
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        scrollPosition += direction * bookWidth; // 更新滾動位置

        // 限制滾動位置在範圍內
        if (scrollPosition < 0) {
            scrollPosition = 0;
        } else if (scrollPosition > maxScroll) {
            scrollPosition = maxScroll;
        }

        // 滾動畫廊
        gallery.style.transform = `translateX(-${scrollPosition}px)`;
    }

    // 綁定按鈕點擊事件
    document.querySelector('.book_carousel_prev').addEventListener('click', () => scrollGallery(-1));
    document.querySelector('.book_carousel_next').addEventListener('click', () => scrollGallery(1));
});

document.querySelector('.search-btn').addEventListener('click', function() {
    alert('Search button clicked!');
});



function switchTab(tabId) {
    // 取得所有按鈕和內容區塊
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // 移除所有按鈕的 active 樣式並隱藏所有內容區塊
    tabButtons.forEach(button => button.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // 為被點擊的按鈕添加 active 樣式，並顯示對應的內容區塊
    document.querySelector(`button[onclick="switchTab('${tabId}')"]`).classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

// 預設顯示電子資源查詢的內容
document.addEventListener("DOMContentLoaded", function() {
    switchTab('resource-search'); // 預設啟用的標籤內容
});
    


document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const books = document.querySelectorAll(".book");
    const totalBooks = books.length;
    const bookGallery = document.querySelector(".book-gallery");

    // 計算書籍的寬度加上間距
    const bookWidth = books[0].offsetWidth + 20; // 書籍寬度 + 間距
    const visibleBooks = Math.floor(bookGallery.parentElement.offsetWidth / bookWidth);
    const maxIndex = totalBooks - visibleBooks;

    function scrollGallery(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        bookGallery.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
    }

    // 綁定按鈕點擊事件
    document.querySelector(".book_carousel_prev").addEventListener("click", () => scrollGallery(-1));
    document.querySelector(".book_carousel_next").addEventListener("click", () => scrollGallery(1));
});

//-------------------------------------------------三個欄位---------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const moreLink = document.querySelector(".more-link");
    
    moreLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("More link clicked! Display more content here.");
    });
});

// -----------------------------------------------示例：更新瀏覽人次-------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // 模擬更新瀏覽人次
    let visitorCount = 480948; // 初始數值
    document.getElementById('visitor-count').textContent = visitorCount;
});



function switchContent(tabId) {
    // 移除所有內容區塊的 active 狀態
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // 為被點擊的內容區塊添加 active 狀態
    document.getElementById(tabId).classList.add('active');
}

// 設置標籤按鈕的點擊事件
// document.addEventListener('DOMContentLoaded', function() {
//     const tabButtons = document.querySelectorAll('.tab-button');
//     tabButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // 根據按鈕的 data-tab 屬性切換內容
//             const tabId = this.getAttribute('data-tab');
//             switchContent(tabId);
//         });
//     });
// });


// function switchTab(tabId) {
//     // 移除所有按鈕的 active 狀態
//     const buttons = document.querySelectorAll('.tab-button');
//     buttons.forEach(button => button.classList.remove('active'));

//     // 隱藏所有內容區塊
//     const contents = document.querySelectorAll('.tab-content');
//     contents.forEach(content => content.classList.remove('active'));

//     // 顯示被選中的內容區塊並設置按鈕為 active
//     document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add('active');
//     document.getElementById(tabId).classList.add('active');
// }




// function showTabContent(tabId) {
//     const tabContents = document.querySelectorAll('.tab-content');
//     const tabButtons = document.querySelectorAll('.tab-button');

//     tabContents.forEach(content => {
//         content.classList.remove('active');
//     });

//     tabButtons.forEach(button => {
//         button.classList.remove('active');
//     });

//     document.getElementById(tabId).classList.add('active');
//     document.querySelector(`.tab-button[onclick="showTabContent('${tabId}')"]`).classList.add('active');
// }
// document.addEventListener("DOMContentLoaded", function () {
//     // 切換標籤的功能
//     function switchTab(tabId) {
//         const allButtons = document.querySelectorAll(".tab-button");
//         const allContents = document.querySelectorAll(".tab-content");

//         // 移除所有按鈕和內容的 'active' 類別
//         allButtons.forEach(button => button.classList.remove("active"));
//         allContents.forEach(content => content.classList.remove("active"));

//         // 為被點擊的按鈕和對應的內容添加 'active' 類別
//         document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add("active");
//         document.getElementById(tabId).classList.add("active");
//     }

//     // 頁面載入時自動激活“最新消息”
//     switchTab('latest-news');
// });

function handleDatabaseChange() {
    const databaseSelect = document.getElementById("database");
    const extraDropdownContainer = document.getElementById("extra-dropdown-container");

    // 如果選擇了 "Library Catalogue"，顯示新的下拉選單
    if (databaseSelect.value === "library") {
        extraDropdownContainer.style.display = "block";
    } else {
        extraDropdownContainer.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    function switchTab(tabId) {
        // 找到所有的按鈕和內容區塊
        const allButtons = document.querySelectorAll(".tab-button");
        const allContents = document.querySelectorAll(".tab-content");

        // 移除所有按鈕和內容區塊的 active 樣式
        allButtons.forEach(button => button.classList.remove("active"));
        allContents.forEach(content => content.classList.remove("active"));

        // 為當前選中的按鈕和內容區塊添加 active 樣式
        document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add("active");
        document.getElementById(tabId).classList.add("active");
    }

    // 頁面加載後，默認顯示「館藏快速查詢」和「最新消息」
    switchTab('library-search');
    switchTab('latest-news');
});




















// document.addEventListener("DOMContentLoaded", function() {
//     const gallery = document.querySelector('.book-gallery');
//     const carousel = document.querySelector('.book-carousel');
//     const bookWidth = document.querySelector('.book').offsetWidth + 20; // 書籍寬度 + 間距
//     const visibleBooks = Math.floor(carousel.clientWidth / bookWidth); // 每頁顯示的書本數量
//     const scrollAmount = bookWidth * visibleBooks; // 每次滾動的距離
//     let currentScroll = 0;

//     document.querySelector('.prev').addEventListener('click', () => scrollGallery(-1));
//     document.querySelector('.next').addEventListener('click', () => scrollGallery(1));

//     function scrollGallery(direction) {
//         const maxScroll = gallery.scrollWidth - carousel.clientWidth;
//         currentScroll += direction * scrollAmount;

//         // 限制滾動範圍在最大和最小值之間
//         if (currentScroll < 0) {
//             currentScroll = 0;
//         } else if (currentScroll > maxScroll) {
//             currentScroll = maxScroll;
//         }

//         // 移動到更新後的位置
//         gallery.style.transform = `translateX(-${currentScroll}px)`;

//         // 更新按鈕狀態
//         document.querySelector('.prev').disabled = currentScroll === 0;
//         document.querySelector('.next').disabled = currentScroll === maxScroll;
//     }

//     // 初始化按鈕狀態
//     document.querySelector('.prev').disabled = currentScroll === 0;
//     document.querySelector('.next').disabled = currentScroll >= maxScroll;
// });

// function switchTab(tabId) {
//     // 移除所有按鈕的 active 狀態
//     const buttons = document.querySelectorAll('.tab-button');
//     buttons.forEach(button => button.classList.remove('active'));

//     // 移除所有內容的 active 狀態
//     const contents = document.querySelectorAll('.content');
//     contents.forEach(content => content.classList.remove('active'));

//     // 設置被選中的按鈕和內容為 active
//     document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add('active');
//     document.getElementById(tabId).classList.add('active');
// }

// function adjustParentHeight() {
//     const parentContainer = document.querySelector('.parent-container');
//     const contentHeight = parentContainer.scrollHeight;
//     parentContainer.style.height = `${contentHeight}px`;
// }

// // 調用該函數以調整高度
// adjustParentHeight();


