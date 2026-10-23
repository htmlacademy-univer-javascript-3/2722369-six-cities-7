import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <h1>404 Not Found</h1>
          <p>Страница не найдена.</p>
          <Link to="/">Вернуться на главную страницу</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
