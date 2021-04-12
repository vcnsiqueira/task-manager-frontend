import { useEffect, useState } from 'react';

const useFormHook = (callback, validate) => {

    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, callback, isSubmitting]);

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        };
        setIsSubmitting(true);
        setErrors(validate(inputs));
    };

    const handleChange = event => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        handleChange,
        handleSubmit,
        inputs,
        errors,
    };
};

export default useFormHook;