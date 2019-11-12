import React from 'react';

function SignIn(props) {
    const [user, setUser] = useState({})
    const changeHandler = (e)=>{
        {setUser({...user,[e.target.name]:e.target.value})}
    }
    return (
        <div>
            <form>
                <input name='username' onChange={changeHandler} placeholder='username'></input>
                <input name='password' onChange={changeHandler}placeholder='password'></input>
                <button type='submit' onClick={(e)=>{}}>Register</button>
            </form>
        </div>
    );
}

export default SignIn;