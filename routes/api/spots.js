const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;


const Booking = require('../../models/Booking');
const Image = require('../../models/Image');
const Spot = require('../../models/Spot');

router.post('/', (req, res) => {
  let currentDate = new Date();
  let startDate = req.body.startDate ? new Date(req.body.startDate).setHours(23, 59, 0, 0) : new Date().setHours(23, 59, 0, 0);
  let endDate = req.body.startDate ? new Date(req.body.endDate).setHours(0, 0, 0, 0) : new Date(currentDate.getTime() + 86400000).setHours(0, 0, 0, 0);

  let guestCount = req.body.guestCount ? (req.body.guestCount.adults + req.body.guestCount.children + req.body.guestCount.infants) : 1;
  let priceRange = req.body.priceRange || { minValue: 0, maxValue: 1000 };

  let searchText = req.body.searchText || '';
  let sw_lat = req.body.bounds ? req.body.bounds.sw.lat : -90.0;
  let sw_lng = req.body.bounds ? req.body.bounds.sw.lng : -180.0;
  let ne_lat = req.body.bounds ? req.body.bounds.ne.lat : 90.0;
  let ne_lng = req.body.bounds ? req.body.bounds.ne.lng : 180.0;
  
  Spot.find({ 
    lng: { $gte: sw_lng, $lte: ne_lng},
    lat: { $gte: sw_lat, $lte: ne_lat},
    occupancy: { $gte: guestCount }, 
    price: { $lte: priceRange.maxValue, $gt: priceRange.minValue} })
  .populate('images')
  .then(spots => {
    spotHash = {};
    const allSpotsIds = spots.map(el => String(el._id));
    Booking.find({ spot_id: { $in: allSpotsIds },
      start_date: { $lt: endDate },
      end_date: { $gt: startDate }})
    .then(conflictingBookings => {
      const conflictingSpotsIds = conflictingBookings.map(el => el.spot_id);
      const availableSpotsIds = allSpotsIds.filter(el => !conflictingSpotsIds.includes(el));

      spots.forEach(spot => {
        if (availableSpotsIds.includes(String(spot._id))) {
          spotHash[spot._id] = spot;
        }
      });
      return res.json(spotHash);
    })
      .catch((err) => { console.log(err); });
    }
  )
  .catch(err => res.status(404).json({ nospotfound: 'No Spot found' }));
});

router.get('/:spot_id', (req, res) => {
  Spot.findById(req.params.spot_id)
    .populate('images')
    .then(spot => {
      res.json( { [spot._id]: spot } );
      }
    )
    .catch(err =>
      res.status(404).json({ nospotfound: 'No spot found with that ID' })
    );
});


module.exports = router;