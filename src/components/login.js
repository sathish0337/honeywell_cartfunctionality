import React from 'react';
import authenticateUser from '../services'
import { Card, Divider, TextField, Button, Grid } from '@material-ui/core';
class Login extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
    }

    handleAuthentication = () => {
        authenticateUser(this.state.username, this.state.password).then(res => {
            if (res.authToken) {
                this.props.history.push('/products');
            }
        });
    }

    changeUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    changePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Username"
                            variant="outlined"
                            value={this.state.username}
                            onChange={this.changeUsername}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            required
                            label="Password"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.changePassword}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.handleAuthentication}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }

}

export default Login