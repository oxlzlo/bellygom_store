document.getElementById('logout').addEventListener('click', () => {
  if (localStorage.getItem('isLogin') === 'true') {
    alert('로그아웃 되었습니다.')
    localStorage.setItem('isLogin', false);
  } else {
    alert('로그인 이력이 없습니다.')
  }
});