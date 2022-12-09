import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
const FormContact = () => {
    const form = useRef();
    const [displayForm, setDisplayForm] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o9la0j9', 'template_etlq19i', form.current, 'k0r8Xh3hPq24PCw8F')
        .then((result) => {
            console.log(result.text);
            setDisplayForm(false);
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
            setEmailSent(false);
            displayForm(true)
        });
    };
    return(
        
        (displayForm && emailSent === false) ?(
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <input type="text" name="user_name" placeholder={'Name'}/>
                    </div>
                     <div>
                        <input type="email" name="user_email" placeholder={'Email'} />
                    </div>
                    <div>
                        <input type="text" name="user_subject" placeholder={"Subject"}/>
                    </div>
                    <div>
                        <textarea name="message" placeholder={'Type your message...'} />
                    </div>
            <input type="submit" value="Send your message" className="submit-btn" />
        </form>
            
    ) : (
            <div className="form-thanks">
                <span>Your emails has been sent!<br/>Thanks for reaching out!</span>
            </div>
    )
    )
}

export default FormContact;