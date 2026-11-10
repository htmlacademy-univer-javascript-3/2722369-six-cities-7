import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './pages/NotFound';
import PrivateRoute from './component/private-route/private-route';
import type { Offer as OfferType } from './types/offer';
import type { Review } from './types/review';

type AppProps = {
  offers: OfferType[];
  reviews: Review[];
};

function App({ offers, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<Offer offers={offers} reviews={reviews} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
