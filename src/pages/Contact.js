import React from 'react';
import contact from '../content/contact';

const Contact = () => {

    return (
        <div>
            <h2 className="numbered-heading overline">What’s Next?</h2>

            <h2 className="title">Get In Touch</h2>

            <p>
            Although I’m not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <a className="email-link" href={`mailto:${contact.email}`}>
            Say Hello
            </a>
        </div>
    );
}

export default Contact;