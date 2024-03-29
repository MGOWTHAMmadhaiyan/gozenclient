import React,{useState} from 'react'
import {Button,Input} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loding';
import axios from 'axios'

function Signup() {

    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});
    const [logInformData, setlogInformData] = useState({
        email: '',
        password: ''
    });
    const validateForm = () => {
        let newErrors = {};
        if (!logInformData.email) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!logInformData.password) {
            newErrors.password = 'Please enter a password';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setlogInformData({
            ...logInformData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true)

            try {
                const response = await axios.post('http://localhost:3017/api/login',logInformData);
                if (response.data.statuscode === 200) {
                    Navigate('/home');
                    console.log('Form submitted:', logInformData);
                    setLoading(false);

                }
            } catch (error) {
                console.log('submit error ',error)
                setLoading(false);
            }
        } else {
            console.log('Form validation failed');
        }
    };
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <Input
                        type="email"
                        name="email"
                        value={logInformData.email}
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
                        value={logInformData.password}
                        onChange={handleChange}
                    /><br></br>
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}

export default Signup;
