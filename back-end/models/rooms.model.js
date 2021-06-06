const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },
    capacity: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;