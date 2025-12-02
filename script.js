// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });
    }
});
// Form Validation Functions
function validateField(event) {
    const field = event.target;
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    // Remove previous error styling
    clearFieldError(field);
    // Validate based on field type
    switch(fieldName) {
        case 'name':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'Please tell us your name';
            } else if (fieldValue.length < 2) {
                isValid = false;
                errorMessage = 'That seems too short';
            }
            break;
        case 'email':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'We need your email to reply';
            } else if (!isValidEmail(fieldValue)) {
                isValid = false;
                errorMessage = 'That doesn\'t look like an email';
            }
            break;
        case 'phone':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'Please add your phone number';
            } else if (!isValidPhone(fieldValue)) {
                isValid = false;
                errorMessage = 'Please use a valid phone number (e.g., 0700 123 456)';
            }
            break;
        case 'subject':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'Please choose one';
            }
            break;
        case 'message':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'What did you want to tell us?';
            } else if (fieldValue.length < 10) {
                isValid = false;
                errorMessage = 'Can you tell us a bit more?';
            }
            break;
    }
    // Display error if validation fails
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    return isValid;
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPhone(phone) {
    // Accepts formats like: +256 700 123 456, 0700123456, 256700123456
    const phoneRegex = /^(\+?256|0)?[7]\d{8,9}$/;
    const cleanedPhone = phone.replace(/\s+/g, '');
    return phoneRegex.test(cleanedPhone);
}
function showFieldError(field, message) {
    field.classList.add('error');
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}
function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}
function clearError(event) {
    const field = event.target;
    if (field.classList.contains('error')) {
        clearFieldError(field);
    }
}
// Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let isFormValid = true;
    // Validate all fields
    const fields = ['name', 'email', 'phone', 'subject', 'message'];
    fields.forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
            const event = new Event('blur');
            field.dispatchEvent(event);
            if (field.classList.contains('error')) {
                isFormValid = false;
            }
        }
    });
    if (!isFormValid) {
        showFormMessage('Oops! Please check the fields above', 'error');
        return;
    }
    // Disable submit button
    const submitBtn = form.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }
    // Simulate form submission (in real application, this would be an API call)
    setTimeout(() => {
        // Get form values
        const formValues = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            newsletter: formData.get('newsletter') === 'on'
        };
        // Log form data (in production, send to server)
        console.log('Form submitted:', formValues);
        // Show success message
        showFormMessage('Thanks! We got your message and will get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        
        // Re-enable submit button
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
        // Scroll to success message
        const messageElement = document.getElementById('formMessage');
        if (messageElement) {
            messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 1500);
}
function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `form-message ${type} show`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageElement.classList.remove('show');
        }, 5000);
    }
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



