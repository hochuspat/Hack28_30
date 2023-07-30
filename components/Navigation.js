import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navigation" >
      <div className="nav-item">
        <Link href="/">
          <div className="logo">GD</div>
        </Link>
      </div>

      <div className="nav-item">
        <Link href="/specialties">
          <div className="nav-link">Специальности</div>
        </Link>
      </div>

      <div className="nav-item">
        <Link href="/ege-calculator">
          <div className="nav-link">Калькулятор ЕГЭ</div>
        </Link>
      </div>

      <div className="nav-item">
        <Link href="/universities">
          <div className="nav-link">Для ВУЗов</div>
        </Link>
      </div>

      <div className="nav-item">
        <Link href="/support">
          <div className="nav-link">Поддержка</div>
        </Link>
      </div>
      <div className="nav-item">
      <Link href="/login">
        <button className="login-button">Войти</button>
        </Link>
      </div>
      <style jsx>{`
        .navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin: 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
        }

        .logo {
          color: #000;
          font-family: "ABeeZee", sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-right: 10px;
        }

        .login-button {
          display: inline-flex;
          padding: 10px 30px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 20px;
          background: #E1E1FB;
          color: #000;
          font-family: "ABeeZee", sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          border: none;
          cursor: pointer;
        }

        .nav-link {
          color: #000;
          font-family: "ABeeZee", sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #555;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;

