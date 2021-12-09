import { useState } from "react" ;
import axios from "axios";

const LoginForm = ( ) => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {'Project-ID':"ed0a379f-5895-4739-af5a-13e95c2fad91", 'User-Name': username, 'User-Secret': password}

        try {
           await axios.get("https://api.chatengine.io/chats", {headers: authObject});
           localStorage.setItem("username", username);
           localStorage.setItem("password", password);


        window.location.reload();
        } catch (error) {
            setError("Username and/or password is not correct")
        }
    }

return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form  onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)}
                    className="input"
                    placeholder="Username"
                    required 
                />
                <input 
                    type="password" 
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    placeholder="Password"
                    required 
                />
                
                <div align="center">
                    <button type= "Submit" className="button">
                        <span>Login</span>
                    </button>
                </div>
                <h2 className="error">{error } </h2>
            </form>
        </div>
    </div>
)
}
export default LoginForm;