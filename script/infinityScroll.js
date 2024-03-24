// 5개 초과된 아이템 안 보이게
function hideLastItem() {
  const visibleItems = document.querySelectorAll('.item_container:not(.hidden)');
  if (visibleItems.length > 5) {
    visibleItems[visibleItems.length - 1].classList.add('hidden');
  }
};

// 스크롤 바닥까지 내렸을 때 숨겨진 아이템 로딩
window.addEventListener('scroll', () => {
  const documentHeight = document.documentElement.scrollHeight;
  const currentScroll = window.innerHeight + window.scrollY;

  if (Math.floor(currentScroll+1) >= documentHeight) {
    showHiddenItems();
  }
});

// 숨겨진 아이템 로딩 함수
const loadingScroll = document.querySelector('.loading-scroll');

function showHiddenItems() {
  const hiddenItems = document.querySelectorAll('.item_container.hidden');
  if (hiddenItems.length > 0) {
    showLoadingScroll();
    setTimeout(() => {
      revealHiddenItems(hiddenItems);
      hideLoadingScroll();
    }, 1000);
  }
};

function showLoadingScroll() {
  loadingScroll.classList.add('show');
};

function hideLoadingScroll() {
  loadingScroll.classList.remove('show');
};

function revealHiddenItems(hiddenItems) {
  hiddenItems.forEach((item, index) => {
    if (index < 3) item.classList.remove('hidden');
  });
};