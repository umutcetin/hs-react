import React, { Component } from 'react'
import MapContainer from './MapContainer';

export class Footer extends Component {

    render() {

        return (
            <div id="contact" className="footer  mt-5 mb-5 p-5">
                <div className="row ">
                    <div className="col-12 col-md-6 ">
                        <MapContainer />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className="coursesHeader">
                        Telefon <br/> 0216 747 31 32 <br/> 0546 403 93 00 
                        <br/> <br/>
                        E-mail <br/> iletisim@homestudiokadikoy.com
                            </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

