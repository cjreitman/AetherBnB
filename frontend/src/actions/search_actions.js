export const RECEIVE_DATE_RANGE = "RECEIVE_DATE_RANGE";
export const RECEIVE_GUEST_COUNT = "RECEIVE_GUEST_COUNT";
export const RECEIVE_PRICE_RANGE = "RECEIVE_PRICE_RANGE";
export const RECEIVE_SEARCH_STATUS = 'RECEIVE_SEARCH_STATUS';
export const RECEIVE_BOUNDS = 'RECEIVE_BOUNDS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_MAP_IS_ACTIVE = 'RECEIVE_MAP_IS_ACTIVE';

export const receiveDateRange = (dateRange) => {
  return {
    type: RECEIVE_DATE_RANGE,
    dateRange
  }
};

export const receiveGuestCount = (count) => ({
  type: RECEIVE_GUEST_COUNT,
  count
});

export const receivePriceRange = (priceRange) => ({
  type: RECEIVE_PRICE_RANGE,
  priceRange
});

export const receiveSearchStatus = (active) => ({
  type: RECEIVE_SEARCH_STATUS,
  active
});

export const receiveBounds = (bounds) => ({
  type: RECEIVE_BOUNDS,
  bounds
});

export const receiveLocation = (location) => ({
  type: RECEIVE_LOCATION,
  location
});

export const receiveMapIsActive = (mapIsActive) => ({
  type: RECEIVE_MAP_IS_ACTIVE,
  mapIsActive
});
