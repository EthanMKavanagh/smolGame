import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TableRow, TableCell, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {withStyles} from '@material-ui/core/styles';
import mapStoreToProps from '../../redux/mapStoreToProps';

// import '../HomePage/HomePage.css';

const styles = {
    TableCell: {
        width: '100px',
        backgroundColor: 'blue'
    }
}

class PlayerList extends Component {

    onPlayerProfile = () => {
        this.props.dispatch({
            type: 'FETCH_INDIVIDUAL_PLAYER',
            payload: this.props.player.id
        });
        this.props.history.push('/player-profile');
    }

    onDelete = (id) => {
        this.props.dispatch({
            type: 'DELETE_PLAYER',
            payload: id
        });
    }

    render() {
        const classes = this.props.classes
        return (
            <TableRow key={this.props.player.id}>
                <TableCell 
                    component="th"
                    scope="row"
                    className={classes.TableCell}
                    onClick={this.onPlayerProfile}
                >
                    {this.props.player.name}
                </TableCell>
                <TableCell 
                    align="center"
                    className={classes.TableCell}
                    onClick={this.onPlayerProfile}
                >
                    {this.props.player.number}
                </TableCell>
                    {this.props.store.user.authLevel === 'ADMIN' ?
                <TableCell 
                    align="center"
                    className={classes.TableCell}
                >
                    <IconButton 
                        aria-label="delete"
                        onClick={() => this.onDelete(this.props.player.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </TableCell> :
                <TableCell className={classes.TableCell}></TableCell>
                }
            </TableRow>
        );
    }
}
export default connect(mapStoreToProps)(withStyles(styles)(withRouter(PlayerList)));