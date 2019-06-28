import React, { Component } from 'react'
import Modal from './Modal';
import PropTypes from 'prop-types';



export class InstructorItem extends Component {
    render() {
        return (
            <div>
                <div className="col d-flex">
                    <div className="card text-center m-4 flex-fill">
                        {/* eslint-disable-next-line */}
                        <a href="#" className="btn btn-fix" data-toggle="modal" data-target={"#modal_" + this.props.instructor.id}>
                            <div className="card-body">
                                <h5 className="card-title"><img src={require(`../assets/img/${this.props.instructor.iconSrc}`)} alt="img" className="rounded-circle instructor-rounded" /></h5>
                                <p className="card-text">{this.props.instructor.title}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <Modal element={this.props.instructor} />
            </div>
        )
    }
}

InstructorItem.propTypes = {
    instructor: PropTypes.object.isRequired
}

export default InstructorItem
