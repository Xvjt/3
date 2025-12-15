/* 共享JavaScript文件 - script.js */

// 页面导航
let currentPage = 'cover';
const pages = ['cover', 'intro', 'interaction1', 'interaction2', 'interaction3', 'interaction4', 'interaction5', 'interaction6', 'artifact', 'knowledge', 'result'];

function navigateTo(pageId) {
  // 隐藏当前页面
  const current = document.getElementById(currentPage);
  if (current) current.classList.add('hidden');
  
  // 显示目标页面
  const target = document.getElementById(pageId);
  if (target) target.classList.remove('hidden');
  
  currentPage = pageId;
  
  // 更新按钮状态
  updateNavButtons();
}

function updateNavButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  const currentIndex = pages.indexOf(currentPage);
  
  if (prevBtn) {
    prevBtn.disabled = currentIndex === 0;
  }
  
  if (nextBtn) {
    nextBtn.disabled = currentIndex === pages.length - 1;
  }
}

function nextPage() {
  const currentIndex = pages.indexOf(currentPage);
  if (currentIndex < pages.length - 1) {
    navigateTo(pages[currentIndex + 1]);
  }
}

function prevPage() {
  const currentIndex = pages.indexOf(currentPage);
  if (currentIndex > 0) {
    navigateTo(pages[currentIndex - 1]);
  }
}

// 证书日期生成
function updateCertificateDate() {
  const dateElement = document.getElementById('certificate-date');
  if (dateElement) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    dateElement.textContent = `日期: ${year}年${month}月${day}日`;
  }
}

// 茶百戏成果图片插入
function insertPaintingResult() {
  const resultImg = document.getElementById('painting-result-img');
  if (resultImg) {
    // 这里可以替换为实际的绘画结果图片
    resultImg.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="90" fill="%23d4c9a8"/%3E%3Cpath d="M60 80 C80 60, 120 60, 140 80 L140 120 C120 140, 80 140, 60 120 Z" fill="%238c1c13"/%3E%3C/svg%3E';
  }
}

// 页面加载完成后初始化
window.addEventListener('load', () => {
  updateCertificateDate();
  insertPaintingResult();
});

// 分享功能
function showShareOptions() {
  const shareOptions = document.querySelector('.share-options');
  if (shareOptions) {
    shareOptions.style.display = 'block';
  }
}

function hideShareOptions() {
  const shareOptions = document.querySelector('.share-options');
  if (shareOptions) {
    shareOptions.style.display = 'none';
  }
}

// 保存证书为图片
function saveCertificate() {
  // 这里可以实现将证书保存为图片的功能
  showPopup('证书已保存！');
}

// 分享到社交媒体
function shareTo(platform) {
  // 这里可以实现分享到不同平台的功能
  hideShareOptions();
  showPopup(`已分享到${platform}！`);
}

// 通用弹窗功能
function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'completion-message';
  popup.innerHTML = `
    <button class="close-btn" onclick="this.parentElement.remove()">&times;</button>
    <h3>${message}</h3>
  `;
  document.body.appendChild(popup);
  popup.style.display = 'block';
  
  setTimeout(() => {
    if (popup.parentElement) {
      popup.remove();
    }
  }, 3000);
}