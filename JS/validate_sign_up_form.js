
function validateForm() {
    // Get form inputs
    var Name = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate  name
    if (Name.trim() === '') {
        alert('Please enter your Name');
        return false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Validate password
    if (password.trim() === '' || password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }

    // If all validations pass, allow form submission and redirect to the thank you page
    window.location.href = '3_thank-you-page.html';
    // Prevent default form submission (optional)
    return false;
 
}
