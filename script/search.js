// 상품 검색
const searchInput = document.querySelector('.search input[type="text"]');
const searchBtn = document.querySelector('.search .searchBtn');

function searchByInputValue(inputValue) { 
  const items = document.querySelectorAll('.item_container');
  items.forEach(item => {
    const title = item.querySelector('.item:nth-child(3)').textContent.toLowerCase();
    showSearchItems(item, title.includes(inputValue.toLowerCase()));
  });
};

function showSearchItems(item, isVisible) {
  item.style.display = isVisible ? '' : 'none';
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = searchInput.value.toLowerCase();
  searchByInputValue(inputValue);
});