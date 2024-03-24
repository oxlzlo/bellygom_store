// 전체 선택, 전체 해제
function checkAllBoxes(checked) {
  const checkboxes = document.querySelectorAll('.item_container input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = checked);
}

document.querySelector('.buttons input[value="전체 선택"]').addEventListener('click', () => checkAllBoxes(true));
document.querySelector('.buttons input[value="전체 해제"]').addEventListener('click', () => checkAllBoxes(false));