document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation and submission for the reservation form
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(bookingForm)) {
            // Simulate form submission (replace with actual API call)
            alert('Reservation successfully submitted!');
            bookingForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Form validation and submission for the contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(contactForm)) {
            // Simulate form submission (replace with actual API call)
            alert('Message successfully sent!');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Function to validate forms
    function validateForm(form) {
        let valid = true;
        form.querySelectorAll('input[required], textarea[required]').forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });
        return valid;
    }

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call

    // Google Map Embed Initialization
    function initMap() {
        const location = { lat: 53.479444, lng: -2.245278 }; // Example coordinates for Manchester
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location
        });
        const marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Load Google Maps script dynamically
    const mapScript = document.createElement('script');
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    document.body.appendChild(mapScript);
});
