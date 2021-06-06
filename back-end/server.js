const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3200;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose connection Established..');
})


app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users');
const roomsRouter = require('./routes/rooms');
const bookingsRouter = require('./routes/bookings');

app.use('/user', usersRouter);
app.use('/room', roomsRouter);
app.use('/booking', bookingsRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
