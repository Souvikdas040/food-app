import React from 'react';

function Contact() {
    return (
        <div>
            <h2>CONTACT US</h2>
            <form className='form-control' style={{width: "60%", margin: "50px auto"}} method='get'>
                <div className='form-group'>
                    <input className='form-control' type="text" id="name" name="name" placeholder='Enter full name' required />
                </div>
                <div className='form-group mt-4'>
                    <input className='form-control' type="email" id="email" name="email" placeholder='Enter email' required />
                </div>
                <div className='form-group mt-4'>
                    <textarea className='form-control' id="message" name="message" style={{resize: "none"}} placeholder='Enter message' required />
                </div>
                <input className='btn btn-primary mt-4' type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;
