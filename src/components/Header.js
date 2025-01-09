const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="nav-items">
          <div className="logo-container">
            <img src="../public/images/logo.jpg" alt="logo" />
          </div>
          <ul className="navList">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#aboutUs">
              <li>About</li>
            </a>
          </ul>
        </div>
        <div className="connectButton">
          <button className="connectBtn">
            <a href="#foot">Connect</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
