const router = require('express').Router();
let User = require('../models/users.model');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });

    newUser.save()
        .then(() => res.json('User registered successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(() => res.json('User updated successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;