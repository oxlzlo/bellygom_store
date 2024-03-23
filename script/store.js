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


// 전체 선택, 전체 해제
function checkAllBoxes(checked) {
  const checkboxes = document.querySelectorAll('.item_container input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = checked);
}

document.querySelector('.buttons input[value="전체 선택"]').addEventListener('click', () => checkAllBoxes(true));
document.querySelector('.buttons input[value="전체 해제"]').addEventListener('click', () => checkAllBoxes(false));


// 등록 폼
// 등록 버튼 클릭 시 로그인 확인 후 등록 폼 보이기
const showAddForm = document.querySelector('.addForm');
const hideWrap = document.querySelector('.wrap');
const preview = document.getElementById('imagePreview');

document.querySelector('.buttons input[value="등록"]').addEventListener('click', () => {
  if (localStorage.getItem('isLogin') === 'true') {
    showAddForm.classList.add('show')
    hideWrap.classList.add('hidden')
  } else {
    alert('권한이 없습니다. 로그인 페이지로 이동합니다.');
    location.replace('./login.html');
  }
});

// 등록 폼에서 취소 버튼 클릭 시 폼 가리기
document.querySelector('.addForm input[value="취소"]').addEventListener('click', () => {
  showAddForm.classList.remove('show');
  hideWrap.classList.remove('hidden')
  preview.style.display = 'none';
})

// 등록 폼에 이미지 파일 선택 시 미리보기
const itemImageInput = document.getElementById('itemImage');
itemImageInput.addEventListener('change', previewImage);

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function(e) {
    preview.src = e.target.result;
    preview.style.display = 'block';
  };

  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }
};


// 상품 등록
// 사용자 입력 검증
function validateInput(itemName, itemCost) {
  if (!itemName) {
    alert('상품명을 등록해주세요');
    return false;
  }
  if (!itemCost || itemCost <= 0) {
    alert('유효한 상품 가격을 입력해주세요');
    return false;
  }
  return true;
}

// 이미지 업로드 검증
function checkImageFile(itemImageFile, callback) {
  if (itemImageFile && itemImageFile.type.match('image.*')) {
    let reader = new FileReader();
    reader.onload = callback;
    reader.readAsDataURL(itemImageFile);
  } else {
    alert('이미지를 등록해주세요');
  }
};

// 상품 DOM 요소 생성 및 추가
let container = document.querySelector('.container');

function addNewItem(imageSrc, itemName, itemCost) {
  let newItemContainer = document.createElement('div');
  newItemContainer.className = 'item_container';
  newItemContainer.innerHTML = getContent(imageSrc, itemName, itemCost);
  container.insertBefore(newItemContainer, container.firstChild);
};

// UI 상태 초기화
let loadingAddItem = document.querySelector('.loading-addItem');
function resetUI() {
  showAddForm.classList.remove('show');
  preview.style.display = 'none';
  document.querySelector('.wrap').classList.remove('hidden');
  document.getElementById('itemName').value = '';
  document.getElementById('itemCost').value = '';
  loadingAddItem.classList.remove('show');
}

document.querySelector('.addForm input[value="아이템 추가"]').addEventListener('click', addItem);

function addItem() {
  let itemName = document.getElementById('itemName').value.trim();
  let itemImageFile = itemImageInput.files[0];
  let itemCost = parseInt(document.getElementById('itemCost').value, 10);

  if (!validateInput(itemName, itemCost)) return;

  checkImageFile(itemImageFile, function(e) {
    loadingAddItem.classList.add('show');
    showAddForm.classList.remove('show');
    setTimeout(function() {
      addNewItem(e.target.result, itemName, itemCost);
      resetUI();
      hideLastItem();
    }, 1000);
  });
};

function getContent(imageSrc, itemName, itemCost) {
  return `
    <div class="item"><input type="checkbox"></div>
    <div class="item"><img src="${imageSrc}" alt="item"></div>
    <div class="item">${itemName}</div>
    <div class="item">
      <span class="count"> 
        <a href="javascript:void(0)" class="minus">-</a>
        <span class="result">0</span>
        <a href="javascript:void(0)" class="plus">+</a>
      </span>
    </div>
    <div class="item">
      <span class="itemCost">₩${itemCost.toLocaleString()}</span> 
    </div>
    <div class="item">
      <span class="totalCost">₩0</span>
    </div>
    <div class="item"><img class="shopping" src="./images/icon_shopping.png" alt=""></div>
  `;
}


// 5개 초과된 아이템 안 보이게
function hideLastItem() {
  const visibleItems = document.querySelectorAll('.item_container:not(.hidden)');
  if (visibleItems.length > 5) {
    visibleItems[visibleItems.length - 1].classList.add('hidden');
  }
}


// 스크롤 바닥까지 내렸을 때 숨겨진 아이템 로딩
window.addEventListener('scroll', () => {
  const documentHeight = document.documentElement.scrollHeight;
  const currentScroll = window.innerHeight + window.scrollY;

  if (Math.floor(currentScroll+1) >= documentHeight) {
    showHiddenItems();
  }
})

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


// 상품 삭제
document.querySelector('.buttons input[value="삭제"]').addEventListener('click', function deleteItem() {
  const checkboxes = document.querySelectorAll('.item_container input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkbox.closest('.item_container').remove();
    }
  });
});


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