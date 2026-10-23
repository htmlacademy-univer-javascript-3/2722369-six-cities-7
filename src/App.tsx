import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Offer from './pages/Offer';
import NotFound from './pages/NotFound';
import PrivateRoute from './component/privateRoute/PrivateRoute';

type AppProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main rentalOffersCount={rentalOffersCount} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthorized={false}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
