import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends React.Component {
  
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    placeCoords: PropTypes.any
  };
  
  static defaultProps = {
    center: [46.732400,-117.00020],
    zoom: 17,
    placeCoords: {lat: 46.732413, lng: -117.000244}
  };

  constructor(props) {
    super(props);
  }

  render(){
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        center={this.props.center}
        zoom={this.props.zoom}
        onChildMouseEnter={this.onChildMouseEnter}
        onChildMouseLeave={this.onChildMouseLeave}
      >
        
      </GoogleMapReact>
    </div>
  );
  }
}