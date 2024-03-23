let errCount = 0;
let isLogin = false;

document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('loginBtn');

  loginButton.addEventListener('click', function() {
    login();
  });
});

function login() {
  const id = document.querySelector('.loginBox input[type="text"]');
  const pw = document.querySelector('.loginBox input[type="password"]');

  if (id.value == '' || pw.value == '') {
    alert('아이디와 패스워드를 모두 입력해주세요');
    return;
  }

  if (id.value == 'bellygom') {
    if (pw.value == 'cute') {
      localStorage.setItem('isLogin', true);
      alert('성공적으로 로그인 되었습니다!');
      location.replace('./store.html');
    } else {
      alert('비밀번호를 확인해주세요.');
      errCount ++;
    }
  } else {
    alert('존재하지 않는 아이디입니다.');
  }

  if (errCount >= 5) {
    alert('비밀번호를 5회 이상 틀리셨습니다. 메인 페이지로 이동합니다.');
    location.replace('./index.html')
  }
};