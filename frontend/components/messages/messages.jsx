import React from "react";
import MessageForm from "./message_form_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

class Messages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            users: this.props.users,
            pastHistory: 50,
        };
        this.bottom = React.createRef();
        this.userLoaded = this.userLoaded.bind(this);
    }

    componentDidMount(){
        if (App.cable.subscriptions.subscriptions[0] !== undefined){
            App.cable.subscriptions.subscriptions[0].unsubscribe();
        }
        App.cable.subscriptions.create(
            { channel: "ChatChannel",
                channel_id: this.props.match.params.id,
                user_id: this.props.session},
            {
                received: data => {
                    if(data.type === "message"){
                        this.setState({
                            messages: this.state.messages.concat(data)
                        });
                    }
                    if(data.type === "user"){
                        this.props.fetchUser(data.user);
                    }
                },
                speak: function (data) { return this.perform("speak", data); }
            }
        );
        this.setState({ messages: [] });
        this.props.clearMessages();
        this.props.fetchMessages(this.props.match.params.id);
    }

    componentDidUpdate(prevProps){

        if (prevProps.match.params.id !== this.props.match.params.id)
        {
            App.cable.subscriptions.subscriptions[0].unsubscribe();
            App.cable.subscriptions.create(
                { channel: "ChatChannel",
                channel_id: this.props.match.params.id },
                {
                    received: data => {
                        if (data.type === "message") {
                            this.setState({
                                messages: this.state.messages.concat(data)
                            });
                        }
                        if (data.type === "users") {
                            this.props.fetchUser(data.user);
                        }
                    },
                    speak: function (data) { return this.perform("speak", data); }
                }
            );
            this.setState({messages: []});
            this.props.clearMessages();
            this.props.fetchMessages(this.props.match.params.id);
        }
        if(this.bottom.current !== null){
            this.bottom.current.scrollIntoView();

        }
    }


    convertTime(timeStamp){
        const created_at = new Date(timeStamp);
        let hours = created_at.getHours();
        const minutes = created_at.getMinutes();
        let dayNight = "";

        if ((hours) > 12){
            dayNight = "pm";
            hours %= 12;
        } else{
            dayNight = "am";
        }

        return `${this.addZero(hours)}:${this.addZero(minutes)} ${dayNight}`;
    }

    addZero(num){
        if(num < 10){
            return `0${num}`;
        }
        return num;
    }

    convertDay(timeStamp){
        const today = new Date();
        const created_at = new Date(timeStamp);
        if((today.getMonth === created_at.getMonth &&
            today.getDate === created_at.getDate)){
                return "Today";
        }else{
            return `${today.getMonth}/${today.getDate}`;
        }
    }

    userLoaded(user_id, loadedUsers){
        if(loadedUsers[user_id] === undefined){
            return "loading";
        }else{
            return loadedUsers[user_id].discord_username;
        }
    }

    render(){
      console.log(this.props)
        let oldMessages = Object.values(this.state.messages);
        let newMessages = Object.values(this.props.messages);
        let users = this.props.users;
        const messageList = newMessages.concat(oldMessages).map(message => {
            const time = this.convertTime(message.created_at);
            const day = this.convertDay(message.created_at);
            return (
                <li key={message.id} className="message">
                    <hr className="messageHR" />
                    <section className="messageBody">
                        <img className="messageIcon" src={window.iconGreen}/>
                        <section className="messageText">
                            <section className="messageAuthor">
                                {this.userLoaded(message.user_id, users)} <span className="messageDate">
                                    {day} at {time}
                                </span>
                            </section>
                            <section className="messageContent" >{message.content}</section>
                        </section>
                    </section>
                    <div ref={this.bottom}/>
                </li>
            );
        });
        const hash = <FontAwesomeIcon icon={faHashtag} />
        let channelName;
        if(this.props.channels[this.props.match.params.channelId] !== undefined){
            channelName = this.props.channels[this.props.match.params.id].name;
        }
        return (
            <section className="messageList">
                <header className="messageHeader">
                    <section className="messageHeaderLeft">
                        <span className="hash">{hash}</span>
                        <span className="channelName">{channelName}</span>
                    </section>
                </header>
                <ul className="messageContainer">
                    {messageList}
                </ul>
                <div ref={this.bottom} />
                <hr className="bottomHR" />
                <MessageForm channelName={channelName}/>
            </section>
        );
    }

}

export default Messages;