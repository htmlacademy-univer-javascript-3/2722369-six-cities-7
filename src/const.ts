import type { City, OfferType } from './types/offer';

export const OFFER_TYPE_LABELS: Record<OfferType, string> = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export const RATING_PERCENT_PER_POINT = 20;

export const MIN_REVIEW_LENGTH = 50;

export const MAX_REVIEW_LENGTH = 300;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const DEFAULT_CITY: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12,
  },
};
