import { useState } from 'react';
import styles from './styles.module.css';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	}

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value})
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const url = 'https://mern-auth-backend-1hqv.onrender.com/api/users';
            const {data : res} = await axios.post(url, data);
            navigate('/login');
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message);
            }
        }
    }
    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to='/login'>
                        <button 
                        type='button' 
                        className={styles.white_btn}
                        >Sign In</button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form onSubmit={handleSubmit} className={styles.form_container}>
                        <h1>Create Account</h1>
                        <input
                        name='firstName'
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className={styles.input}
                        placeholder='First Name' 
                        type="text" />
                        <input
                        name='lastName'
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className={styles.input}
                        placeholder='Last Name' 
                        type="text" />
                        <input
                        name='email'
                        onChange={handleChange}
                        value={data.email}
                        required
                        className={styles.input}
                        placeholder='Email' 
                        type="email" />

                        <input
                        name='password'
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                        placeholder='Password' 
                        type={showPassword ? "text" : "password"} />
                        
                        <button 
						type="button" 
						className={styles.eye_btn}
						onClick={togglePasswordVisibility}
						>{showPassword ? <FaEyeSlash/> : <FaEye/>}
						</button>
                        {error && <p className={styles.error_msg}>{error}</p>}
                        <button type='submit' className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;