import React, { Component } from 'react';
import { loginUser } from "./UserFunctions";
import { createList } from '../actions/action'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: "",
            error: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmitUser = this.onSubmitUser.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitUser(e) {
        e.preventDefault();
        console.log(this.state.user_id)

        loginUser(this.state.user_id)
            .then(res => {
                console.log(res.data.Search);
                if (res.status === 200) {
                    this.props.createList(res.data.Search);
                    this.props.history.push("dashboard");

                } else {
                    if (res.status === 400) {
                        console.log("Login Error");
                        this.setState({ error: res.data.message });
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <form noValidate onSubmit={this.onSubmitUser}>
                    <div className="form-group">
                        <label htmlFor="user_id">Student ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="user_id"
                            placeholder="Enter User ID"
                            value={this.state.user_id}
                            onChange={this.onChange}
                        />
                    </div>
                    {this.state.error ? <label>{this.state.error}</label> : ""}
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block mt-3 login-btn"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}


// const mapStateToProps = state => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

const mapDispatchToProps = dispatch => ({
    createList: movieList => dispatch(createList(movieList))
})

export default connect(
    null,
    mapDispatchToProps
)(Login)