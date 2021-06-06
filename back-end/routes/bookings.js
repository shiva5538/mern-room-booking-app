const router = require('express').Router();
const moment = require('moment');
let Booking = require('../models/bookings.model');


router.route('/').get((req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const fromDate = Date.parse(req.body.fromDate);
    const toDate = Date.parse(req.body.toDate);
    const durationDiff = moment.duration(moment(toDate).diff(moment(fromDate))).asHours();
    const duration = durationDiff.toFixed(2);
    const subject = req.body.subject;
    const newBooking = new Booking({ fromDate, toDate, subject, duration });
    newBooking.save()
        .then(() => res.json('Booking Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => {
            booking.fromDate = Date.parse(req.body.fromDate);
            booking.toDate = Date.parse(req.body.toDate);
            const durationDiff = moment.duration(moment(toDate).diff(moment(fromDate))).asHours();
            const duration = durationDiff.toFixed(2);
            booking.duration = duration;
            booking.subject = req.body.subject;
            booking.save()
                .then(() => res.json('Booking updated successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then(() => res.json("Booking deleted successfully"))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;