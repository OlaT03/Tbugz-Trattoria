const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let bookings = []; // In-memory storage for simplicity. For production, use a database like MongoDB or PostgreSQL.

app.post('/book', (req, res) => {
    const { fullName, email, phone, date, time } = req.body;

    if (!fullName || !email || !phone || !date || !time) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check for double booking
    const existingBooking = bookings.find(booking => booking.date === date && booking.time === time);
    if (existingBooking) {
        return res.status(400).json({ message: 'Time slot already booked.' });
    }

    const booking = { id: bookings.length + 1, fullName, email, phone, date, time };
    bookings.push(booking);
    res.status(201).json({ message: 'Booking successful.', booking });
});

app.delete('/cancel', (req, res) => {
    const { email, date, time } = req.body;

    if (!email || !date || !time) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const index = bookings.findIndex(booking => booking.email === email && booking.date === date && booking.time === time);
    if (index === -1) {
        return res.status(404).json({ message: 'Booking not found.' });
    }

    bookings.splice(index, 1);
    res.status(200).json({ message: 'Booking canceled.' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
