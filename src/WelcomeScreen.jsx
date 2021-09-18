import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <h1>Let's Meet<img src="https://img.icons8.com/wired/64/000000/worldwide-location.png" alt="World logo" /></h1>
        <span>Please log in with your google account<br></br>
          to see upcoming events for full-stack developers around the world
        </span>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
            </div>
            <button onClick={() => { props.getAccessToken(); }} rel="nofollow noopener" class="btn-text">Sign in
            </button>
          </div>
        </div>
        <button className="privacy-btn" href="https://paulinemarg.github.io/meet-app/privacy.html" rel="nofollow noopener">Privacy policy
        </button>
      </div>)
    : null
}
export default WelcomeScreen;