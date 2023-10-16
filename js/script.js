const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container1 = document.querySelector('.reigster-div');
const container2 = document.querySelector('.login-div');

signUpButton.addEventListener('click', function() {
  container2.classList.add('div-2');
  container1.classList.remove('div-1');
});

signInButton.addEventListener('click', function() {
  container1.classList.add('div-1');
  container2.classList.remove('div-2');
});

// Written by Nemerem Favour +234 8080 790 361
