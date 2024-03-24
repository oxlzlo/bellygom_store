// .itemCost 항상 ₩00,000의 형태로 표시
document.addEventListener('DOMContentLoaded', formatItemCost);
function formatItemCost() {
  document.querySelectorAll('.itemCost').forEach(itemCostEl => {
    let itemCost = parseInt(itemCostEl.textContent);
    itemCostEl.textContent = '₩' + itemCost.toLocaleString();
  });
}

// 수량 조절, 가격 변동
document.addEventListener('DOMContentLoaded', () => {
  container.addEventListener('click', function(e) {
    const itemContainer = e.target.closest('.item_container');
    if (!itemContainer) return;
    if (e.target.classList.contains('plus')) {
      countItem(itemContainer, 1);
    }
    if (e.target.classList.contains('minus')) {
      countItem(itemContainer, -1);
    }
    if (e.target.classList.contains('shopping')) {
      addItemToCart();
    }
  });
});

function countItem(itemContainer, change) {
  let result = itemContainer.querySelector('.result');
  let itemCostEl = itemContainer.querySelector('.itemCost');
  let itemCost = parseInt(itemCostEl.textContent.replace(/[^\d]/g, ''));
  let totalCost = itemContainer.querySelector('.totalCost');

  let currentCount = parseInt(result.textContent);
  let newCount = currentCount + change;
  newCount = Math.max(0, newCount);
  result.textContent = newCount;
  totalCost.textContent = `₩${(newCount * itemCost).toLocaleString()}`;
};

function addItemToCart() {
  let input = confirm('장바구니에 추가하시겠습니까?');
  if (input) {
    alert('성공적으로 추가되었습니다!')
  } else {
    alert('취소하였습니다.')
  }
};