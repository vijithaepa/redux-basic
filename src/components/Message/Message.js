import React from 'react'
import './Message.css'
import {connect} from "react-redux";

const Message = ({message}) => (
    message ? <span className='message'>{message}</span> : null
);

export default connect(
    (state) => ({message: state.message})
) (Message);