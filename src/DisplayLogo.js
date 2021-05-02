import React from 'react'
import Logo from "./img/high-score-board-banner.jpg";

function DisplayLogo() {
    return (
      <>
        <div className="row justify-content-center">
          <img className="col-6 col-md-6" src={Logo} alt="Logo" />
        </div>
      </>
    );
  }

  export default DisplayLogo