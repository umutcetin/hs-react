import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '80%',
            height: '100%',
        };
        return (
            <Map google={this.props.google} zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
                className="m-4">
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>Test</h1>
                    </div>
                </InfoWindow>
            </Map >
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBK2QKK1Ch8xpoiUAsjQRrc3Qhx7Mf2dYs'
})(MapContainer)