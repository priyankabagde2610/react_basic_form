import {use,useState} from "react";

function Login1()
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

    function handleuserpassChange(event)
    {
        console.log(event);
        setUser(preUser=>({...preUser,[event.target.name]:event.target.value}))
    }

   

    return<div>
            <h1>Login here by one function.......!</h1>
            <form onSubmit={onLogin}>
                 <div>
                    <label htmlFor="uname">Enter Username</label>
                    <input type="text" id="uname" name="username" onChange={handleuserpassChange}></input>
                    </div>

                    <div>
                        <label htmlFor="pname">Enter Password</label>
                        <input type="password" id="pname" name="password" onChange={handleuserpassChange}></input>
                     </div>
                     <button type="submit">Login</button>


            </form>

    </div>
}
export default Login1