import React from 'react'


export default class UserList extends React.Component{

   componentDidMount(){
      this.props.getUsersIndex(parseInt(this.props.match.params.id));
   }

   render(){
      let users = this.props.users;
      let serverId = parseInt(this.props.match.params.id);

      let currentUser = null;
      if (this.props.currentUser.allServers.includes(serverId)){
         currentUser = (
            <div id='user-list-current-user'>
               <div>
                  <div id='current-avatar'className='post-avatar'><i className="fab fa-discord"></i></div>
                  { this.props.currentUser.username }
               </div>
         </div>
         )
      }
      return(
         <div id='user-list-container'>
            <h3>Users List</h3>

            <ul>
            {currentUser}
               {

               Object.keys(users).map( id =>
                  <li className='user-container' key={id}>

                     <div id='post-content'>{(users[id].username==="Admin" || users[id].username === this.props.currentUser.username)? null:
                        <div>
                           <div className='post-avatar'><i className="fab fa-discord"></i></div>
                           { users[id].username }
                        </div>

                     }</div>

                  </li>
               )
            }</ul>

         </div>
      )
   }
}