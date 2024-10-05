import React from 'react'
import Title from './Title'

function Feedback() {
    return (
        <div className='container mt-4 height'>
            <Title />
            <h3 className='mt-5' style={{ fontSize: "28px", fontWeight: 600, color: "#0d6efd" }}>Feedback</h3>
            <div className='my-4'>
                <h4><b>Dear User,</b></h4>
                <p>Thanks for using Virtual Labs. Your opinion is valuable to us. To help us improve, we'd like to ask you a few questions about your experience. It will only take 3 minutes and your answers will help us make Virtual Labs better for you and other users.</p>
                <button type="button" class="btn btn-outline-primary">Share Your Experience</button>
                <p className='mt-5'>Thanks for your time !
                    <br /><b>The Virtual Labs Team</b></p>
            </div>
        </div>
    )
}

export default Feedback
