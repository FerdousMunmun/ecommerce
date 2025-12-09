import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">

      {/* ========== TOP BAR (NAV CENTER) ========== */}
      <div className="header-top">

        {/* Logo Left */}
        <div className="header-logo">OREBI</div>

        {/* Nav Middle */}
        <nav className="header-nav">
          <NavLink to="/" end className="header-link">Home</NavLink>
          <NavLink to="/shop" className="header-link">Shop</NavLink>
          <NavLink to="/about" className="header-link">About</NavLink>
          <NavLink to="/contact" className="header-link">Contacts</NavLink>
          <NavLink to="/journal" className="header-link">Journal</NavLink>
        </nav>

        {/* Right side empty — to balance flex box */}
        <div className="header-right-placeholder"></div>
      </div>

      {/* ===================== BOTTOM BAR ===================== */}
      <div className="header-bottom">
        <button className="category-btn">
          <span className="category-icon">☰</span>
          <span>Shop by Category</span>
        </button>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search Products"
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="header-icons">
          <button className="icon-btn">👤</button>
          <button className="icon-btn">▾</button>
          <button className="icon-btn">🛒</button>
        </div>
      </div>
    </header>
  );
};

export default Header;



