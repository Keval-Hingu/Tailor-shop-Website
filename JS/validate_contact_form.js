function validateContactForm() {
    // Get form inputs
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('mail').value;
    var mobno = document.getElementById('mobno').value;
    var option = document.getElementById('reason').value;
    var contactReason = document.getElementById('subject').value;
    
    // Validate first name
    if (fname.trim() === '') {
        alert('Please enter your first name');
        return false;
    }
    
    // Validate last name
    if (lname.trim() === '') {
        alert('Please enter your last name');
        return false;
    }
    
    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    var mobileno = /^[0-9]{10}$/;
    if (!mobileno.test(mobno)) {
        alert('Please enter a digit in mobile number field');
        return false;
    }
    
    // Validate option selection
    if (option === '') {
        alert('Please select an option');
        return false;
    }
    
    // Validate contact reason (textarea)
    if (contactReason.trim() === '') {
        alert('Please provide a reason for contacting us');
        return false;
    }
     // If all validations pass, allow form submission and redirect to the thank you page
     document.location.href = '3_thank-you-page.html';
     
     // If all validations pass, allow form submission
     return false;
}
