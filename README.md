# README


## Deecord

Deecord is a clone of discord, a platform where users can communicate with one another in the safety of server communities. Servers can have multiple channels, each being unique chat rooms that users can chat in.

## [Deecord Live](deecord.herokuapp.com)

## Technologies Used

### Ruby on Rails
 * Ruby 2.5.1p57
 * Rails 5.2.6

### PostgreSQL


### React/Redux

* React v17.0.2
* Redux v4.1.1

## Features

## Code Snippets

### Modal

This app utilizes multiple modals, from creating and deleting servers to editing channels. In order to simplify the code, a big modal container was created that was able to be called anywhere in the website. Below is the code for how the modal recognized which modal component to open.

```javascript
render() {
    let {modal, closeModal} = this.props;
    let component;
    switch(modal) {
      case 'addServer':
        component = <AddServerContainer />
        break;
      case 'createServer':
        component = <Route path="/channels" component = {CreateServerContainer} />
        break;
      case 'joinServer':
        component = <Route path="/channels" component = {JoinServerContainer} />
        break;
      case 'inviteServer':
        component = <Route path="/channels/:serverId" component = {InviteServerContainer} />
        break;
      case 'createChannel':
        component = <Route path="/channels/:serverId" component = {CreateChannelContainer} />
        break;
      case 'editChannel':
        component = <Route path="/channels/:serverId/channels/:channelId" component = {EditChannelContainer}/>
        break;
      case 'deleteChannel':
        component = <Route path='/channels/:serverId/channels/:channelId' component = {DeleteChannelContainer}/>
        break;
      default:
        return null;
    }

    return (
      <div className='modal-background' onClick={closeModal}>
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          {component}
        </div>
    </div>
    )
  }
}
```




