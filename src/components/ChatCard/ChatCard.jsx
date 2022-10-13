import React from "react";
// import ChatFeed from "react-chat-ui";/
import { ChatFeed, ChatBubble, BubbleGroup, Message } from "react-chat-ui";

const styles = {
  button: {
    backgroundColor: "#fff",
    borderColor: "#1D2129",
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 2,
    color: "#1D2129",
    fontSize: 18,
    fontWeight: "300",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    outline: "none"
  },
  selected: {
    color: "#fff",
    backgroundColor: "#0084FF",
    borderColor: "#0084FF"
  }
};

const users = {
  0: "You",
  1: "Michel",
  2: "Evan"
};

let messageData = [
  new Message({ id: "1", message: "Hey guys", senderName: "Michel" }),
  new Message({ id: "2", message: "Hello", senderName: "Evan" }),
  new Message({ id: "1", message: "Hey guys", senderName: "Michel" }),
  new Message({ id: "2", message: "Hello", senderName: "Evan" }),
  new Message({ id: "1", message: "Hey guys", senderName: "Michel" }),
  new Message({ id: "2", message: "Hello", senderName: "Evan" })
];


const customBubble = props => (
  <div>
    <p>{`${props.message.senderName} ${props.message.id ? "says" : "said"}: ${
      props.message.message
    }`}</p>
  </div>
);

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: messageData,
      useCustomBubble: true,
      curr_user: 0
    };
  }

  onPress(user) {
    this.setState({ curr_user: user });
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
    const prevState = this.state;
    const newMessage = new Message({
      id: recipient,
      message,
      senderName: users[recipient]
    });
    prevState.messages.push(newMessage);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="chatfeed-wrapper">
          <ChatFeed
            chatBubble={this.state.useCustomBubble && customBubble}
            maxHeight={250}
            messages={this.state.messages} // Boolean: list of message objects
            showSenderName
          />

          <form onSubmit={e => this.onMessageSubmit(e)}>
            <input
              ref={m => {
                this.message = m;
              }}
              placeholder="Type a message..."
              className="message-input"
            />
          </form>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                ...styles.button,
                ...(this.state.curr_user === 0 ? styles.selected : {})
              }}
              onClick={() => this.onPress(0)}
            >
              You
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.curr_user === 1 ? styles.selected : {})
              }}
              onClick={() => this.onPress(1)}
            >
              Michel
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.curr_user === 2 ? styles.selected : {})
              }}
              onClick={() => this.onPress(2)}
            >
              Evan
            </button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <button
              style={{
                ...styles.button,
                ...(this.state.useCustomBubble ? styles.selected : {})
              }}
              onClick={() =>
                this.setState({ useCustomBubble: !this.state.useCustomBubble })
              }
            >
              Custom Bubbles
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
