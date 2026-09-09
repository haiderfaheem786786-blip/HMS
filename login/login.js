let email = document.getElementById('email');
let password = document.getElementById('password');
let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let emailValue = email.value;
    let passwordValue = password.value;
    let role = document.getElementById('role').value;
    
       if (role === 'admin' && emailValue === 'admin@gmail.com' && passwordValue === '12345') {
           window.location.href = '../admin-dashboard/admin-dashboard.html';
        } 
        else if (role === 'customer' && emailValue === 'faheem@gmail.com' && passwordValue === '112233') {
            window.location.href = '../customer-dashboard/customer-dashboard.html';
        } 
        else {
            alert('Invalid user credentials');
        }
    });
