import React from "react";
// import ChatFeed from "react-chat-ui";/
import { ChatFeed, ChatBubble, BubbleGroup, Message } from "react-chat-ui";
import "./ChatCard.css";


const users = {

  1: "Adi",
  2: "Michel",
  3: "Zeev",
  4: "Shlomo"
};

let messageData = [
  new Message({ id: "1", message: "Hey guys", senderName: "Adi" }),
  new Message({ id: "2", message: "Hello", senderName: "Michel" }),
  new Message({ id: "3", message: "Hey guys", senderName: "Zeev" }),
  new Message({ id: "4", message: " Shabat Shalom", senderName: "Shlomo" }),
  new Message({ id: "1", message: "Hey guys", senderName: "Adi" }),
  new Message({ id: "2", message: "Hello", senderName: "Michel" }),
  new Message({ id: "3", message: "Hey guys", senderName: "Zeev" }),
  new Message({ id: "4", message: " Shabat Shalom", senderName: "Shlomo" }),


];



class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: messageData,
      curr_user: 1//take the number from data base
    };
  
   
  }

  onMessageSubmit(e) {
    const input = this.message;
    e.preventDefault();
    if (!input.value) {
      return false;
    }
  this.pushMessage(this.state.curr_user, input.value);
    input.value = "";
    return true;
  }

  pushMessage(recipient, message) {

    const newMessage = new Message({
      id: recipient,
      message,
      senderName: users[recipient]
    });
    messageData.push(newMessage);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="chatfeed-wrapper">
          <ChatFeed
            maxHeight={500}
            messages={this.state.messages} // Boolean: list of message objects
            showSenderName
          />

          <form onSubmit={e => this.onMessageSubmit(e)}>
            <input id="messageType" 
              ref={m => {
                this.message = m;
              }}
              placeholder="Type a message..."
              className="message-input"
            />
          </form>
          <div className="sendBtn">
          <button id="send" onClick={e => this.onMessageSubmit(e)}>
              Send Message
            </button>

            
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
