import React from "react";

class UserList extends React.Component {

    render() {
       console.log(this.props)
        return (
            <li key={this.props.user.id}>
                {this.props.user.username}
            </li>
        )
    }
}

export default UserList;