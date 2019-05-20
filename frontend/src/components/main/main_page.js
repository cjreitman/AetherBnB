import React from 'react';
import './splash_page.css'

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-page">
        <h1 className="splash-page-title" >Your home away from home...</h1>
        <img alt="" className="splash-page-img"/>
      </div>
    );
  }
}

export default MainPage;