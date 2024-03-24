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