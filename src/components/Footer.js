import React, { Component } from 'react'
import MapContainer from './MapContainer';

export class Footer extends Component {

    render() {

        return (
            <div className="footer bg-warning">
                <div className="row ">
                    <div className="col-6 bg-light">
                        <MapContainer />
                    </div>
                    <div className="col-6  bg-dark">
                        <h3 className="coursesHeader">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repudiandae nihil quidem architecto voluptates officia earum id suntum dolor sit, amet consectetur adipisicing elit. Nesciunt repudiandae nihil quidem archite 
                            </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

