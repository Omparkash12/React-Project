import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
    return (
        <div className="containerDiv">
            <div className="formData">
                <div className="input1">
                    <input type="text" placeholder='First Name' />
                </div>
                <div className="input1">
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className="input1">
                    <input type="text" placeholder='Email' />
                </div>
                <div class="textArea">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter Message' rows="8"></textarea>
                </div>
                <div className="text-center">
                    <button className="submitBtn" type='submit'>Submit</button>
                </div>

            </div>
        </div>
    )
}
