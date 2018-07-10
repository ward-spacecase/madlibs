import React from 'react';

const Header = (title, subtitle) => {
    return(
      <div className="header">
          <div className="header-skew"></div>
          <div className="header-border"></div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
      </div>
    )
}

export default Header;