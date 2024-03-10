import React from 'react';
import {useNavigate, Navigate} from "react-router-dom";

const LogIn = () => {

    const navigate = useNavigate();
    // console.log(navigate)

    // if(1 === 1) {
    //     return <Navigate to='/'/>
    // }
    // Используется например для авторизации, если вошел в аккаунт то страница доступна, если нет
    // то страница будет перекидывать на главную.

    return (
        <div className='container'>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={() => navigate(-1)} type='button'>Go Back</button>
            {/* значение -1 означает вернуться на шаг назад*/}
            {/* 3 === 3 ? '/about' : ' ' - если 3 равно 3 то верни мне about или же ничего */}
            <br/>
            <br/>
            <br/>
            <br/>
            Log-In
        </div>
    );
};

export default LogIn;