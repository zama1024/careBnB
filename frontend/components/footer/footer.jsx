import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component {

  render() {
    const gtranslate =   function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      };
    return(
      <div id = "footermargin">
        <hr></hr>
        <div className="footercontainer">
          <section className="FooterSec">
            <section id="footer">
            	<ul className="footericons">
                <li><a target="_blank" href="https://www.linkedin.com/in/fzee23/" className="iconfooter"><img src={window.linkedin} className="label" /></a></li>
            	  <li><a target="_blank" href="https://github.com/zama1024" className="iconfooter"><img src={window.github} className="label" /></a></li>
            	  <li><a target="_blank" href="mailto:mdfarshidzaman@gmail.com" className="iconfooter"><img src={window.email} className="label" /></a></li>
            	</ul>
              <ul className="footericons">
            	 <li>&copy; Md Farshid Zaman</li><li>Email: <a href="mailto:mdfarshidzaman@gmail.com">mdfarshidzaman@gmail.com</a></li>
              </ul>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
