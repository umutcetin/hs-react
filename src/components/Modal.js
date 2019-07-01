import React, { Component } from 'react'

export class Modal extends Component {
    render() {
        return (
            <div className="detail-modal modal fade" id={"modal_" + this.props.element.id} tabindex="-1" role="dialog" aria-labelledby="modalDavulLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 " id="modalDavulLabel">
                                {this.props.element.modalTitle.split('<br/>').map((item, i) => <p key={i}>{item}</p>)}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col p-2">
                                    <img src={require(`../assets/img/${this.props.element.imgSrc}`)} className="atolye-modal-img rounded" alt="img" />
                                </div>
                                <div className="col p-2">
                                    {this.props.element.modalText.split('<br/>').map((item, i) => <p key={i}>{item}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
