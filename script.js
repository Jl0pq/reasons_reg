document.getElementById('regForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const responseMsg = document.getElementById('responseMsg');
  
  const token = grecaptcha.getResponse();
  if (!token) {
    responseMsg.textContent = 'Пожалуйста, подтвердите, что вы не робот.';
    return;
  }

  const res = await fetch('https://script.google.com/macros/s/AKfycbwJ1NM3u5AoxZpUvYA4kKWNlccIEeUqVVqHYN3JsNoLjXFQHZVJOPyqvCPo0W_VUg/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, token })
  });

  responseMsg.textContent = 'Спасибо за регистрацию!';
  document.getElementById('regForm').reset();
  grecaptcha.reset();
});
