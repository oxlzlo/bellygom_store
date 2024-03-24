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