import React from 'react';
import {useState} from 'react';
import sedanIcon from './images/icon-sedans.svg';
import suvIcon from './images/icon-suvs.svg';
import luxuryIcon from './images/icon-luxury.svg';
import {sedanCopy, suvCopy, luxuryCopy} from './Copy';
import VehicleList from './VehicleList';

const App = () => {
  const [vehicles, setVehicles] = useState([
    {icon: sedanIcon, type: "sedans", copy: sedanCopy, background: "sedans", id: 1},
    {icon: suvIcon, type: "suvs", copy: suvCopy, background: "suvs", id: 2},
    {icon: luxuryIcon, type: "luxury", copy: luxuryCopy, background: "luxury", id: 3}
  ]);

  return ( 
    <VehicleList vehicles={vehicles} />
  );
}

export default App;
