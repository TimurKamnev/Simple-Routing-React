import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    setTimeout(() => {
        if(count !== 0) {
            setCount(prev => prev - 1)
        }else {
            navigate('/')
        }
    }, 1000)

    return (
        <div className='container'>
            Not Found
            <br/>
            <h1>U'll get back in {count} seconds</h1>
            <br/>
            <button onClick={() => navigate(-1)} type='button'>Go Back</button>
            <br/>
            <img src='https://miro.medium.com/v2/resize:fit:1358/0*QOZm9X5er1Y0r5-t' alt='NotFound'/>
        </div>
    );
};

export default NotFound;