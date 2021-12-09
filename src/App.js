import {ChatEngine} from "react-chat-engine"
import "./App.css"
import { ChatFeed } from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>


  return (

    <ChatEngine 
      height="100vh"
      projectID="ed0a379f-5895-4739-af5a-13e95c2fad91"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}


    /> 

    
  );
}

export default App;
