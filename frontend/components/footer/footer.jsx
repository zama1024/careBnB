import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component {

  render() {
    const gtranslate =   function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      };
    return(
      <div>
        <hr></hr>
        <div className="footercontainer">
          <section className="FooterSec">
            <div id="dropdown">
              <select className="country-selector">
                <option id="America">America</option>
                <option>Canada</option>
                <option>England</option>
                <option>India</option>
                <option>China</option>
                <option>Turkey</option>
                <option>France</option>
              </select>
              <select className="country-selector">
                <option>USD</option>
                <option>AUS</option>
                <option>GBP</option>
              </select>
            </div>
          </section>
          <div id="footlhs">

            <section id="firstsec" className="FooterSec">
              <h3 className="SecHead">CareBnB</h3>
              <li className="SecItem">About</li>
              <li className="SecItem">Help</li>
              <li className="SecItem">FAQ</li>
            </section>
            <section className="FooterSec">
              <h3 className="SecHead">Hosting</h3>
              <li className="SecItem">Why Host</li>
              <li className="SecItem">Hospitability</li>
              <li className="SecItem">Tips</li>
            </section>
            <section className="FooterSec">
              <h3 className="SecHead">Creator</h3>
              <li className="SecItem">Github</li>
              <li className="SecItem">LinkedIn</li>
              <li className="SecItem">Facebook</li>
            </section>
          </div>
        </div>
        <div id="verybot">
          <hr></hr>
          <span id="inc" className="SecItem">© CareBnB, Inc.</span>
          <span id="terms" className="SecItem">Terms & PrivacySite</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
