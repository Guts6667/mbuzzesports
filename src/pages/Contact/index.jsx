import React from "react";
import FormContact from "../../components/FormContact";
import "./Contact.scss"

/**
 * Contact Page
 * @returns {JSX} React Component
 */
const Contact = () => {

    return(
        <section className="container  container__contact">
            <h1>Contact us</h1>
            <p>Let's build something awesome together!</p>
            <FormContact />
        </section>
    )
}

export default Contact;