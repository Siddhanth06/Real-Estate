import { data } from 'autoprefixer';
import React from 'react';

const HouseCards = (data) => {
    console.log("data",data);
    var house_data=data;
  return <div id ={house_data.property_id}>{house_data.property_id}</div>;
};

export default HouseCards;
