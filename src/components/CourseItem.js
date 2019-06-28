import React, { Component } from 'react'
import Modal from './Modal';
import PropTypes from 'prop-types';



export class CourseItem extends Component {
    render() {
        return (
            <>
            <div className="col d-flex">
                <div className="card text-center m-2 flex-fill">
                    {/* eslint-disable-next-line */}
                    <a href="#" className="btn btn-fix" data-toggle="modal" data-target={"#modal_" + this.props.course.id}>
                        <div className="card-body">
                            <h5 className="card-title"><img src={require(`../assets/img/${this.props.course.iconSrc}`)} alt="img" className="course_icon" /></h5>
                            <p className="card-text">{this.props.course.title}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <Modal element={this.props.course} />
            </>
        )
    }
}

CourseItem.propTypes = {
    course: PropTypes.object.isRequired
}

export default CourseItem
