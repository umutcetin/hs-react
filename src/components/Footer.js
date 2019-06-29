import React, { Component } from 'react'
import MapContainer from './MapContainer';

export class Footer extends Component {

    render() {

        return (
            <div className="footer bg-dark mt-5 mb-5 p-5">
                <div className="row ">
                    <div className="col-12 col-md-6 justify-content-center">
                        <MapContainer />
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="coursesHeader">
                        Telefon <br/> 0216 747 31 32 <br/> 0546 403 93 00 
                        <br/> <br/>
                        E-mail: iletisim@homestudiokadikoy.com
                            </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

