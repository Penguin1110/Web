function navigateTo(pageId) {
  // 獲取所有頁面
  const pages = document.querySelectorAll('.page');
  
  // 確保頁面切換時隱藏所有頁面
  pages.forEach((page) => {
    page.classList.remove('active');
  });

  // 顯示指定頁面
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    console.error(`Page with ID '${pageId}' not found.`);
  }
}
