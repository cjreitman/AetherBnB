import React from 'react';
import { Link } from "react-router-dom";

export const SpotIndexItem = ({spot, mapIsActive}) => {
  if ( mapIsActive ) {
    return (<Link className="spots-results-list-c" key={spot._id} to={`/spot/${spot._id}`}>
    <li key={spot._id} className="spot-list-item-m">

      <div className="m-spot-container">
        <div id="spot-list-photo-container-m">
          <img alt="" className="spot-list-photo-m" src={spot.images[0].img_url} />
        </div>

        <div className="spot-list-deets">
          <div className="spot-list-deets-desc">
            <p className="spot-list-description-m">{spot.name}</p>
          </div>
          
          <div className="spot-list-deets-price">
            <p className="spot-list-price-m">${spot.price}/night</p>
          </div>
        </div>
      </div>
      
    </li>
  </Link>)

  } else {
    return (
      <Link className="spots-results-list-r" key={spot._id} to={`/spot/${spot._id}`}>
        <div>
          <li key={spot._id} className="spot-list-item">
            <div id="spot-list-photo-container">
              <img alt="" id="spot-list-photo" src={spot.images[0].img_url} />
            </div>
            <p id="spot-list-description">{spot.name}</p>
            <p id="spot-list-price">${spot.price}/night</p>
          </li>
        </div>
      </Link>
    )
  }
}
