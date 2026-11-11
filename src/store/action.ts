import { createAction } from '@reduxjs/toolkit';
import type { CityName, Offer } from '../types/offer';

export const changeCity = createAction<CityName>('city/change');

export const fillOffers = createAction<Offer[]>('offers/fill');
