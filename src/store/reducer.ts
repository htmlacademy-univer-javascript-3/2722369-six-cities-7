import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';
import type { State } from '../types/state';

const initialState: State = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
