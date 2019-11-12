import React, {useState} from 'react';
import axios from 'axios'

function Register(props) {
    const [user, setUser] = useState({})
    const changeHandler = (e)=>{
        {setUser({...user,[e.target.name]:e.target.value})}
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        const server = 'http://localhost:8000/api/auth/register'
        axios.post(server, user)
        .then(res=>{console.log(res)
            props.history.push('/login')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <form>
                <input name='username' onChange={changeHandler} placeholder='username'></input>
                <input type ='password' name='password' onChange={changeHandler}placeholder='password'></input>
                <button type='submit' onClick={(e)=>{onSubmit(e)}}>Register</button>
            </form>
        </div>
    );
}

export default Register;