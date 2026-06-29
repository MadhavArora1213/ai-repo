import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the subscription logic
        setMessage(`Thank you for subscribing with ${email}!`);
        setEmail('');
    };

    return (
        <div>
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NewsletterSignup;