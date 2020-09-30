import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux'
import { addToCart } from '../action'
import { Divider } from '@material-ui/core';
import Cart from './Cart'
class Products extends React.PureComponent {

    constructor() {
        super();
        this.state = {

        }
    }
    handleClick = (id) => {
        this.props.addToCart(id);
    }

    handleCart = () => {
        this.props.history.push('/cart')
    }

    handleLogout = () => {
        this.props.history.push('/logout')
    }
    render() {

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                        </Typography>
                        <Button color="inherit" onClick={this.handleCart}>Cart Items</Button>
                        <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <List >
                    {this.props.items.map(item => (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.title} secondary={item.price} />
                            <ListItemSecondaryAction>
                                <Button onClick={() => this.handleClick(item.id)}>Add to cart</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)