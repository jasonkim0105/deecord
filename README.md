# README


## Deecord

Deecord is a clone of discord, a platform where users can communicate with one another in the safety of server communities. Servers can have multiple channels, each being unique chat rooms that users can chat in.

## [Deecord Live](https://deecord.herokuapp.com/#/)
<img width="1280" alt="Screen Shot 2021-11-19 at 4 31 33 PM" src="https://user-images.githubusercontent.com/76461881/142707278-53090f8c-8ac9-461c-8aa0-aefac548d16c.png">


## Technologies Used

BackEnd | Frontend
---|:--
Ruby on Rails | React
PostgreSQL | Redux
Rails ActionCable | JavaScript ES6
jbuilder | Websockets

The backend was created using Ruby on Rails. This allows for creation of database with backend routes. In addition, Ruby on rails allows for the ability to query through PostgreSQL. Action Cable is a Rails feature which allows for implementation of websockets from the frontend, which in this case is React. Action Cable allows user to create a channel subscription which is then used in React to create live messaging. As React is the primary frontend technology, all the components were created using React, while Redux was used to help make sure each component was running smoothly. The primary languge used was Javascript for the frontend and Ruby for the backend.


## Features

### Servers/Channels

As this is a clone of Discord, this app has the ability for a user to create servers, which is open for other users to join using the server's invite code. Once a server is created, users are able to create individual channels which serves as the private rooms in which all users can chat with one another.
<img width="1279" alt="Screen Shot 2021-11-19 at 4 23 13 PM" src="https://user-images.githubusercontent.com/76461881/142706790-8d891fae-7a27-4256-9701-9329af094360.png">

A user can send other users their invite code, which they can then use to join the desired server.
<img width="1276" alt="Screen Shot 2021-11-19 at 4 24 17 PM" src="https://user-images.githubusercontent.com/76461881/142706854-dfcbbea7-c39d-4309-a5a4-40a600a4fad6.png">

### Live Messaging

Within each channel, users are able to chat with one another in live time.
<img width="1279" alt="Screen Shot 2021-11-19 at 4 28 05 PM" src="https://user-images.githubusercontent.com/76461881/142707065-20b9253e-416a-4269-848d-c00e752ccbf5.png">



### Direct Messaging

In addition to chatting in servers, users are able to direct message one another.
<img width="1279" alt="Screen Shot 2021-11-19 at 4 30 18 PM" src="https://user-images.githubusercontent.com/76461881/142707220-92df7e5b-c5e3-4baf-a86d-b95e617cf479.png">




### Modal

This app utilizes multiple modals, from creating and deleting servers to editing channels. In order to simplify the code, a big modal container was created that was able to be called anywhere in the website. Below is the code for how the modal recognized which modal component to open.

```javascript
render() {
    switch(modal) {
      case 'addServer':
        component = <AddServerContainer />
        break;
      case 'createDM':
        component = <CreateDMessage />
        break;
      case 'createServer':
        component = <Route path="/channels" component = {CreateServerContainer} />
        break;
      case 'joinServer':
        component = <Route path="/channels" component = {JoinServerContainer} />
        break;
      case 'editServer':
        component = <Route path='/channels/:serverId' component= {ServerSettingsDropdown} />
        break;
      case 'inviteServer':
        component = <Route path="/channels/:serverId" component = {InviteServerContainer} />
        break;
      case 'deleteServer':
        component = <Route path="/channels/:serverId" component = {DeleteServerContainer} />
        break;
      case 'leaveServer':
        component = <Route path="/channels/:serverId" component = {LeaveServerContainer} />
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
```




