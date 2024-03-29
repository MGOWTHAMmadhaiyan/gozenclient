import React, { useState } from 'react';
import { Button, Input} from '@mui/material'

function OptimisticComponent() {
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Optimistically update UI
        setIsLoading(true);
        setIsSuccess(false);

        try {
            if (true) {
                setIsSuccess(true);
            } else {
                setIsSuccess(false);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <p>OPTIMISTIC</p>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="submit" disabled={isLoading} variant="contained" color="primary">
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
            {isSuccess && <p>Submission successful!</p>}
            {isSuccess === false && <p>Submission failed. Please try again.</p>}
        </div>
    );
};

export default OptimisticComponent;
