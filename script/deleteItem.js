// 상품 삭제
document.querySelector('.buttons input[value="삭제"]').addEventListener('click', function deleteItem() {
  const checkboxes = document.querySelectorAll('.item_container input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkbox.closest('.item_container').remove();
    }
  });
});