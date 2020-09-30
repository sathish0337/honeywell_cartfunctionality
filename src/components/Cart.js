import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../action'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
class Cart extends Component {

    handleRemove = (id) => {
        //this.props.removeItemFromCart(id)
    }
    render() {
        return (

            this.props.items.length ?
                (<div>
                    <List >
                        {this.props.items.map(item => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.title} secondary={item.price} />
                                <ListItemSecondaryAction>
                                    <Button onClick={() => this.handleRemove(item.id)}>Remove</Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <div>Total Amount: {this.props.total}</div>

                </div>
                )

                :

                (
                    <p>Not Available.</p>
                ))
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
        total: state.total
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItemFromCart: (id) => { dispatch(removeItemFromCart(id)) }
//     }
// }

export default connect(mapStateToProps)(Cart)