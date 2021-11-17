import React from 'react';
// import DmMessageForm from './dm_message_form';

class DirectMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            value: ''
        }
        this.subscription = null;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.subscribe();
        this.props.fetchChannelDMs(this.props.dmChannelId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.path !== this.props.path) {
            this.setState({ value: "" })
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

    handleInput(e){
        e.preventDefault();
        this.setState({ value: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.subscription.send({
            message: {
                dm_channel_id: this.props.dmChannelId,
                author_id: this.props.currentUser.id,
                body: this.state.value
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

    render(){
        console.log(this.props)
        if(!this.props.dmChannel) return null
        if(!this.props.dmMessages) return null
        let dm;
        if(this.props.dmChannel.user1_id === this.props.currentUserId){
            dm = this.props.dmChannel.user2.username
        } else {
            dm =this.props.dmChannel.user1.username
        }
        console.log(dm)
        return(
            <div className='messages-component'>
                <div className='messages-with-title-container'>
                    <div className='channel-title-container'>
                        <div className='channel-name-chatbox'>
                            {dm}
                        </div>
                    </div>
                </div>

                <div className='messages-container'>
                    <div id='offet'>
                        {this.props.dmMessages.map( message => {
                            return (
                                <li key={message.id} className="message-list-item">
                                    <div className='message-icon'>
                                        <i className="fab fa-discord"></i>
                                    </div>
                                    <div className='message-content'>
                                        <p className='message-sender'>
                                            <div className='message-sender-username'>
                                                {message.user1.username}
                                            </div>
                                            <div className='timestamp'>
                                                {message.created_at.slice(11,19)} {message.created_at.slice(5,7)}/
                                                {message.created_at.slice(8,10)}/
                                                {message.created_at.slice(0,4)}
                                            </div>
                                        </p>
                                        <p className='message-body'>{message.body}</p>
                                    </div>
                                </li>
                            )
                        })}

                    </div>
                    <div className='message-form-input-container'>
                        <form className='message-form-container' onSubmit={this.handleSubmit}>
                            <input
                                className='message-input'
                                type='text'
                                value={this.state.value}
                                autoComplete='off'
                                onChange={this.handleInput('body')}
                                placehoder={'message'}
                                />
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default DirectMessages;