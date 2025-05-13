document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    // Validate name field
    function validateName() {
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        const nameValue = nameInput.value.trim();
        
        if (nameValue === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(nameValue)) {
            nameError.textContent = 'Name should only contain letters';
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }
    
    // Validate email field
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            emailError.textContent = 'Email is required';
            emailError.style.display = 'block';
            return false;
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }
    
    // Validate phone field
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^[\d\s\-()+]+$/;
        
        if (phoneValue === '') {
            phoneError.textContent = 'Phone number is required';
            phoneError.style.display = 'block';
            return false;
        } else if (!phoneRegex.test(phoneValue)) {
            phoneError.textContent = 'Please enter a valid phone number';
            phoneError.style.display = 'block';
            return false;
        } else {
            phoneError.style.display = 'none';
            return true;
        }
    }
    
    // Validate date field
    function validateDate() {
        const dateInput = document.getElementById('date');
        const dateError = document.getElementById('date-error');
        const dateValue = dateInput.value;
        
        if (dateValue === '') {
            dateError.textContent = 'Date is required';
            dateError.style.display = 'block';
            return false;
        } else {
            // Check if date is in the future
            const selectedDate = new Date(dateValue);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                dateError.textContent = 'Please select a future date';
                dateError.style.display = 'block';
                return false;
            } else {
                dateError.style.display = 'none';
                return true;
            }
        }
    }
    
    // Validate time field
    function validateTime() {
        const timeInput = document.getElementById('time');
        const timeError = document.getElementById('time-error');
        const timeValue = timeInput.value;
        
        if (timeValue === '') {
            timeError.textContent = 'Time is required';
            timeError.style.display = 'block';
            return false;
        } else {
            timeError.style.display = 'none';
            return true;
        }
    }
    
    // Validate guests field
    function validateGuests() {
        const guestsInput = document.getElementById('guests');
        const guestsError = document.getElementById('guests-error');
        const guestsValue = guestsInput.value;
        
        if (guestsValue === '') {
            guestsError.textContent = 'Please select number of guests';
            guestsError.style.display = 'block';
            return false;
        } else {
            guestsError.style.display = 'none';
            return true;
        }
    }
    
    // Validate entire form
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isDateValid = validateDate();
        const isTimeValid = validateTime();
        const isGuestsValid = validateGuests();
        
        return isNameValid && isEmailValid && isPhoneValid && isDateValid && isTimeValid && isGuestsValid;
    }
    
    // Event listeners for real-time validation
    document.getElementById('name').addEventListener('blur', validateName);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('phone').addEventListener('blur', validatePhone);
    document.getElementById('date').addEventListener('change', validateDate);
    document.getElementById('time').addEventListener('change', validateTime);
    document.getElementById('guests').addEventListener('change', validateGuests);
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show a confirmation message
            
            // Show loading animation
            const loading = document.createElement('div');
            loading.className = 'loading';
            loading.innerHTML = '<div class="spinner"></div>';
            document.body.appendChild(loading);
            
            // Simulate server request with setTimeout
            setTimeout(function() {
                loading.classList.add('hidden');
                form.classList.add('hidden');
                confirmationMessage.classList.remove('hidden');
                
                // Reset form (for demo purposes)
                form.reset();
            }, 1500);
        }
    });
    
    // Set minimum date to today for date picker
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});