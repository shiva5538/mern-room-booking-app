const router = require('express').Router();
let Room = require('../models/rooms.model');


router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Room.findById(req.params.id)
        .then(room => res.json(room))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const capacity = Number(req.body.capacity);
    const isAvailable = req.body.isAvailable;

    const newRoom = new Room({ name, capacity, isAvailable });

    newRoom.save()
        .then(() => res.json('Room Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Room.findById(req.params.id)
        .then(room => {
            room.name = req.body.name;
            room.capacity = Number(req.body.capacity);
            room.isAvailable = req.body.isAvailable;
            room.save()
                .then(() => res.json('Room updated successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Room.findByIdAndDelete(req.params.id)
        .then(() => res.json("Room deleted successfully"))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;