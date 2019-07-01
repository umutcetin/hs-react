import React, { Component } from 'react'
import MapContainer from './MapContainer';

export class Footer extends Component {

    render() {

        return (
            <div id="contact" className="footer  mt-5 mb-5 p-5">
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <div class="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6023.318110794287!2d29.029604!3d40.988946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab865f1f917bd%3A0x2631608c26d79174!2zT3NtYW5hxJ9hIE1haGFsbGVzaSwgU8O8bGV5bWFuIFBhxZ9hIFNrLiBObzoyMiwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1562003755069!5m2!1str!2str" width="600" height="450" frameborder="0"  allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-4">
                        <h4 className="coursesHeader">
                            Telefon <br /> 0216 747 31 32 <br /> 0546 403 93 00
                        <br /> <br />
                            E-mail <br /> iletisim@homestudiokadikoy.com
                            </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

