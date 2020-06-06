import React from 'react';
import Footer from '../../components/Footer/Footer';

import './AboutUs.scss';

function AboutUs() {
  return (
    <div>
      <div>
        <h1>About Us</h1>
      </div>
      <div className="body-aboutus">
        <div>
          <h2>Title about us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer elit quam, convallis sit amet ullamcorper et,
            blandit mattis libero. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nullam efficitur magna lacus,
            sed interdum tellus eleifend eu. Mauris ac elementum
            sapien. Cras consequat congue velit, non dignissim lectus accumsan id.
            Suspendisse elementum elit est, sed malesuada
            felis viverra vitae. Nulla id metus quis velit congue vestibulum.
            Nam vehicula enim id leo gravida convallis. Ut eros
            justo, placerat quis tortor a, lacinia dictum quam.
            Vestibulum nunc dolor, tristique in tempor quis,
            facilisis eu felis. Nunc quis tristique arcu. Aliquam
            id porta nunc. Sed venenatis turpis magna, ut vulputate purus egestas et.
          </p>
          <p>
            Aenean sit amet augue et nunc placerat iaculis non sit amet ex.
            Nam erat ante, semper nec nisl non, bibendum euismod tellus.
            Mauris eget nisl pulvinar ligula accumsan molestie.
            Vestibulum hendrerit, augue non ultricies rhoncus,
            lacus arcu sollicitudin ex, non accumsan eros erat eu justo.
            Curabitur aliquet dolor aliquam, posuere metus vitae,
            pretium nisi. Vestibulum et condimentum nulla.
            Aenean laoreet feugiat lorem sit amet aliquam.
            Curabitur euismod tristique quam, eu laoreet elit porta
            ut. Suspendisse tincidunt semper ullamcorper. Aliquam
            non interdum elit, sed efficitur leo. Phasellus
            vel turpis egestas, sagittis sem sed, tempor odio. Nullam
            mollis, eros a consectetur ultricies, orci est ornare
            velit, quis gravida magna ante eu eros. Morbi
            quis mollis magna. Maecenas consequat augue id urna imperdiet eleifend.
          </p>
        </div>
        <div>
          <h2>Img about us</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
