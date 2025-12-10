document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('regForm');
    const successMsg = document.getElementById('successMsg');
    
    const nameInput = document.getElementById('name');
    const regnoInput = document.getElementById('regno');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    
    const regnoPattern = /^2[3-9][A-Z]{3}\d{4}$/;  // 23BCE1234 format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;  // 10 digits
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();  // STOP page reload
        
        // Clear previous messages
        successMsg.style.display = 'none';
        clearAllErrors();
        
        let isValid = true;
        let errors = [];
        
        // Validate Name
        if (!nameInput.value.trim() || nameInput.value.length < 2 || !/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
            showError(nameInput, 'Name: 2+ letters only');
            isValid = false;
        }
        
        // Validate RegNo
        if (!regnoPattern.test(regnoInput.value)) {
            showError(regnoInput, 'Format: 23BCE1234');
            isValid = false;
        }
        
        // Validate Email
        if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, 'Enter valid email');
            isValid = false;
        }
        
        // Validate Phone
        if (!phonePattern.test(phoneInput.value)) {
            showError(phoneInput, '10 digits only');
            isValid = false;
        }
        
        // SUCCESS!
        if (isValid) {
            successMsg.innerHTML = '✅ <strong>Registration Successful!</strong><br>Thank you for registering with VIT-AP.';
            successMsg.style.display = 'block';
            form.reset();
        }
    });
    
    function showError(input, message) {
        let errorSpan = input.parentNode.querySelector('.error');
        if (!errorSpan) {
            errorSpan = document.createElement('div');
            errorSpan.className = 'error';
            input.parentNode.appendChild(errorSpan);
        }
        errorSpan.textContent = message;
        input.style.borderColor = '#ff4444';
    }
    
    function clearAllErrors() {
        const inputs = [nameInput, regnoInput, emailInput, phoneInput];
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
            const errorSpan = input.parentNode.querySelector('.error');
            if (errorSpan) errorSpan.remove();
        });
    }
});