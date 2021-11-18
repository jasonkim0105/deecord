import React from "react";

class UserList extends React.Component {

    render() {
        return (
            <li className="user-list-name" key={this.props.user.id}>
                {this.props.user.username}
            </li>
        )
    }
}

export default UserList;