
const db = require('../config/keys').mongoURI;
const mongoose = require('mongoose');
const Booking = require('../models/Booking');

const currentDate = new Date();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then((database) => {
    Booking.remove({}).then(() => {
      Booking.create(
        [
          { user_id: '5cc726fc047c7a35927cd696', spot_id: '5cca1345aa86acf11cfb1e5e', guest_count: 2, start_date: new Date(), end_date: new Date(currentDate.getTime() + 86400000),  date: new Date() },
          { user_id: '5cc726fc047c7a35927cd696', spot_id: '5cca1345aa86acf11cfb1e7f', guest_count: 3, start_date: new Date(currentDate.getTime() + 86400000), end_date: new Date(currentDate.getTime() + (86400000 * 3)), date: new Date() },
        ]
      )
    })
  }
)