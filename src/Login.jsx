import {use,useState} from "react";

function Login()
{

    const[user,setUser]=useState({
                                    username:"",
                                    "password":""
                                })

    function onLogin(event)
    {
        event.preventDefault();
        alert("this will take few minutes.....!")
        console.log(user)
    }

    function handleUsername(event)
    {
        console.log(event.target.value)
        setUser(preUser=>({
            ...preUser,
            username:event.target.value
        }));
    }
    function handlePassword(event)
    {
        console.log(event.target.value)
        setUser(preUser=>({
            ...preUser,
            password:event.target.value
        }));
    }

    return<div>
            <h1>Login here .......!</h1>
            <form onSubmit={e=>onLogin(e)}>
                 <div>
                    <label htmlFor="uname">Enter Username</label>
                    <input type="text" id="uname" name="username" onChange={Event=>handleUsername(Event)}></input>
                    </div>

                    <div>
                        <label htmlFor="pname">Enter Password</label>
                        <input typt="password" id="pname" name="password" onChange={Event=>handlePassword(Event)}></input>
                     </div>
                     <button type="submit">Login</button>


            </form>

    </div>
}
export default Login