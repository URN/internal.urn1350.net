import React from 'react';

import Settings from '../../settings.json';
  
  export default class ImageHeader extends React.Component {
    render() {
      return (
        <header>
          <div className="header-text blurred-container">
            <h1>{Settings.siteTitle}</h1>
            <span className="subtitle">{Settings.siteSubtitle}</span>
          </div>
        </header>
      );
    }
}