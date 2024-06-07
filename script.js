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

    // Form validation for the reservation form
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(bookingForm)) {
            alert('Reservation successfully submitted!');
            bookingForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Form validation for the contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(contactForm)) {
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

    // Display selected menu items on order button click
    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', function () {
        const selectedItems = [];
        document.querySelectorAll('.menu input[type="checkbox"]:checked').forEach(checkbox => {
            selectedItems.push(checkbox.value);
        });

        if (selectedItems.length > 0) {
            alert('You have selected: ' + selectedItems.join(', '));
        } else {
            alert('Please select at least one item from the menu.');
        }
    });

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

    // Google Map Embed Initialization (Replace with actual Google Map Embed code)
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
    document.body.appendChild(mapScript);
});
