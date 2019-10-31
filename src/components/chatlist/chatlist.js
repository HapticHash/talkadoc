import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import styles from './styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import NotificationImportant from '@material-ui/icons/NotificationImportant';

class ChatListComp extends React.Component {

    render() {

        const { classes } = this.props;

        return(
            <div> 
                <main className={ classes.root }>
                    <Button variant='contained'
                     fullWidth
                     color='primary'
                     className={classes.newChatButton}
                     onClick={this.newChat}>
                    </Button>        
                    <List>

                    </List>
                </main>            
            </div>
        
        );
    }

    newChat = () => {
        console.log('new chat is clicked.')
    }
}

export default withStyles(styles)(ChatListComp);