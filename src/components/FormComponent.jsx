import React, { useState } from 'react';
import { Input,Button } from '@mui/material';


//FORM & CONTROLED COMPONENT (TASK 4)
function FormValidation() {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        age: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if(!formData.name)
        {
          newErrors.name = 'Please enter a name';
        }

        if (!formData.email) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.age = 'Please enter a age';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          <div>
                <label>Name:</label>
                <Input
                    type="email"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br></br>
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br></br>
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                /><br></br>
                {errors.age && <span className="error">{errors.age}</span>}
            </div>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
}

export default FormValidation;
