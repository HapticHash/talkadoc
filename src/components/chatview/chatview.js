import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatViewComponent extends React.Component {

    componentDidUpdate = () => {
        const container = document.getElementById('chatview-container');
        if(container)
            container.scrollTo(0, container.scrollHeight);
    }

    render() {
        
        const{ classes, chat, user } = this.props;

        if(chat === undefined) {
            return(<main id="chatview-container" className={classes.content}> </main>);
        }
        else {
            return(
                <div>
                    <div className={classes.chatHeader}>
                        Your chat with <b> {chat.users.filter(_usr => _usr !== user)} </b>
                    </div>
                    <main id="chatview-container" className={classes.content}>
                        {
                            chat.messages.map((_msg, _index) => {
                                return(
                                    <div key={_index} className={_msg.sender === user ? classes.userSent : classes.friendSent}>
                                        { _msg.message}
                                    </div>
                                )
                            })
                        }
                    </main>
                </div>
            )
        }
        return( <div className={classes.content}>Hello from chat view component</div> );

    }

}

export default withStyles(styles)(ChatViewComponent);