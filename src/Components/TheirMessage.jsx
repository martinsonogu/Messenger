const TheirMessage = ({lastMessage, message}) => {
    const isFirstmessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.username
    return(
        <div className="message-row">
            {isFirstmessageByUser && (
                <div 
                    className="message-avatar"
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                />
                
            )}
            {message?.attachments?.length > 0
                    ? (
                            <img 
                                src={message.attachments[0].file} 
                                alt="message-attachment" className="message-image" 
                                style={{marginLeft: isFirstmessageByUser ? "4px" : "48px"}} 
                            />
                     ) : (
                        <div 
                        className="message" style={{float: "left",  backgroundColor: "#CABCDC", marginLeft: isFirstmessageByUser ? "4px" : "48px"}}>
                        {message.text}
                    </div>
                     )
                
            }
        </div>
    )
}

export default TheirMessage;