import React from 'react';
import FormDateRangeContainer from './form_date_range_container';
import FormGuestCountContainer from './form_guest_count_container';
import FormPriceRangeContainer from './form_price_range_container';
import Switch from '@material-ui/core/Switch';

const FormOptions = ({ receiveMapIsActive, mapIsActive }) => {

  return ( 
    <div className="options-wrapper"> 

      <div className="form-options-wrapper">
        <FormDateRangeContainer />
        <FormGuestCountContainer />
        <FormPriceRangeContainer />
      </div>

      <div className="switch-wrapper">
        <p className="show-map-p">Show Map</p>
        <Switch onChange={() => receiveMapIsActive(!mapIsActive)} checked={mapIsActive}/>
      </div>
    
    </div> 
      
  )
};

export default FormOptions;