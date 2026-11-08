import type { OfferType } from './types/offer';

export const OFFER_TYPE_LABELS: Record<OfferType, string> = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export const RATING_PERCENT_PER_POINT = 20;

export const MIN_REVIEW_LENGTH = 50;

export const MAX_REVIEW_LENGTH = 300;
