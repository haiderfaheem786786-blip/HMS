let registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
     let confirmPassword = document.getElementById('confirmPassword').value;
    let role = document.getElementById('role').value;
  if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    } 
    let userData = {
        name: name,
        email: email,
        password: password,
        role: role
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registration successful');
    window.location.href = '../login/login.html';
});