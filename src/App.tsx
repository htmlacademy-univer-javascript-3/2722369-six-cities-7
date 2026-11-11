import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './pages/NotFound';
import PrivateRoute from './component/private-route/private-route';
import type { Review } from './types/review';

type AppProps = {
  reviews: Review[];
};

function App({ reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<Offer reviews={reviews} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
