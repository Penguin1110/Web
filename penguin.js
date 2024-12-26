function navigateTo(pageId) {
 
  const pages = document.querySelectorAll('.page');
  
 
  pages.forEach((page) => {
    page.classList.remove('active');
  });


  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    console.error(`Page with ID '${pageId}' not found.`);
  }
}
