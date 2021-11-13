import React, { useState } from 'react';
import { validateEmail } from '../ulils/helpers';
export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;
        const inputType = target.name;

        if (inputType === 'email') {
            setEmail (inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'message')  {
            setMessage (inputValue);
        }
    }
}