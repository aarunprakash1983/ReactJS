import React from "react";
import axios from "axios";

class UserDetailsAxios extends React.Component {
    constructor(props) {
        super(props);
        this.fetchUserDetails =
            this.fetchUserDetails.bind(this);
    }

    fetchUserDetails() {}

    render() {

        let errorJSX = null;
        let successJSX = null;
        let waitJSX = null;

        if (this.props.fetching) 
        {
         waitJSX = (<h3 style={{ color: "blue" }}>please wait.</h3>);
        }
        if (this.props.userDetails) {
            successJSX = (
                <ul style={{ color: "green" }}>
                    <li>{this.props.userDetails.name}</li>
                    <li>{this.props.userDetails.login}</li>
                    <li>{this.props.userDetails.blog}</li>
                </ul>
            );
        }
        if (this.props.error) {
        errorJSX = (<h3 style={{ color: "red" }}>{this.props.error}</h3>);
        }

        return (
            <div>
                <form>
                    <input
                        type="text"
                        size="50"
                        defaultValue = "https://api.github.com/users/defunkt"
                        ref={node => {
                            this.urlBox = node;
                        }}
                    />
                    <br />
                    <input
                        type="button"
                        value="fetch user details"
                        onClick={this.fetchUserDetails}
                    />
                </form>
                <div>
                    {waitJSX}
                    {successJSX}
                    {errorJSX}
                </div>
            </div>
        );
    }
}


export default UserDetailsAxios;