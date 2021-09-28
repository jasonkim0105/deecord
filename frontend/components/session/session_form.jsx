import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            // email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        if (this.props.errors.length){
            return (
                <div>
                    {this.props.errors.map((error, i) => (
                        <p key={`error-${i}`}>
                            {error}
                        </p>
                    ))}
                </div>
            )
        } else {
            return null;
        }

    }

    render(){
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.formType} or {this.props.link}
                    {/* {this.renderErrors()} */}
                    <div className="login-form">
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;