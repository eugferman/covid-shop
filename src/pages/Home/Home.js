import React from 'react';
import Footer from '../../components/Footer/Footer';

import ReduxName from '../../components/ReduxName/ReduxName';

import './Home.scss';

function Home() {
  return (
    <div>
      <div>
        <h2>Hi Slider!</h2>
      </div>
      <div>
        <h2>Hi Welcome text!</h2>
      </div>
      <div>
        <h2>Hi Products</h2>
      </div>
      <div>
        <h2>Hi Partners</h2>
      </div>
      <div />
      <ReduxName />
      <Footer />
    </div>
  );
}

export default Home;
