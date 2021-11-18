import React from "react";

class DirectMessages extends React.Component {

    constructor(props) {
        super(props)
        this.state = { input: "" }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.subscription = null
    }

    componentDidMount(){
        this.subscribe();
        this.props.fetchChannelDMs(this.props.dmChannelId)
    }

    componentDidUpdate(prevProps) {
        var element = document.getElementById("real-messages");
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
        if (prevProps.dmChannelId !== this.props.dmChannelId) {
            this.setState({ input: "" })
            this.subscription.unsubscribe()
            this.subscribe()
            this.props.fetchChannelDMs(this.props.dmChannelId)
        }
    }

    componentWillUnmount(){
        if (this.subscription){
            this.subscription.unsubscribe();
        }
    }

    handleInputChange(e){
        e.preventDefault();
        this.setState({ input: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.subscription.send({
            message: {
                dm_channel_id: this.props.dmChannelId,
                author_id: this.props.currentUser.id,
                body: this.state.input
            }
        })
        this.setState({ input: "" })
    }

    subscribe() {
        this.subscription = App.cable.subscriptions.create(
            { channel: "DirectMessageChannel", id: this.props.dmChannelId },
            {
                received: data => {
                    this.props.createDM(data.message)
                }
            }
        )
    }

    render() {
        console.log(this.props)
        if (this.props.server) return null
        if (!this.props.dmChannels) return null
        if (!this.props.dmChannel) return null
        let dm;
        if(this.props.dmChannel.user1_id === this.props.currentUserId){
            dm = this.props.dmChannel.user2.username
        } else {
            dm =this.props.dmChannel.user1.username
        }

        return(
            <div className='direct-messages-component'>
                <div className='direct-messages-with-title-container'>
                    <div className='channel-title-container'>
                        <i className="far fa-at"></i>
                        <div className='channel-name-chatbox'>
                            {dm}
                        </div>
                    </div>
                <div className='messages-container'>
                    <div id='real-messages'>
                        {this.props.dmMessages.map( message => {
                            return (
                                <li key={message.id} className="message-list-item">
                                    <div className='message-icon'>
                                        <i className="fab fa-discord"></i>
                                    </div>

                                   <div className='message-content'>
                                        <div className="message-sender">
                                            <div className='message-sender-username'>
                                                {message.author.username}
                                            </div>
                                            <span className="timestamp">
                                               {message.created_at.slice(11,19)} {message.created_at.slice(5,7)}/
                                               {message.created_at.slice(8,10)}/
                                               {message.created_at.slice(0,4)}
                                            </span>
                                        </div>
                                        <p className="message-body">{message.body}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </div>

                    <div className="message-form-input-container">
                        <form onSubmit={this.handleSubmit} className='message-form-container'>
                            <input
                                type="text"
                                className="message-input"
                                placeholder={`Message #${this.props.dmChannel.user1_id === this.props.currentUser.id ?
                                            this.props.dmChannel.user2.username : this.props.dmChannel.user1.username}`}
                                value={this.state.input}
                                onChange={this.handleInputChange}
                            ></input>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default DirectMessages;
