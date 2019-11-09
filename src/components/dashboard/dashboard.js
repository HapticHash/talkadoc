import React from 'react';
import ChatListComp from '../chatlist/chatlist';
import { Button, withStyles } from '@material-ui/core';
import styles from './styles';
import ChatViewComponent from '../chatview/chatview';
const fb = require("firebase");

class dashboardComp extends React.Component {
    constructor() {
        super();
        this.state = {
          selectedChat: null,
          newChatFormVisible: false,
          email: null,
          friends: [],
          chats: []
        };
      }
    
      render() {
    
        const { classes } = this.props;
    
        if(this.state.email) {
          return(
            <div className='dashboard-container' id='dashboard-container'>
              
              <ChatListComp history={this.props.history} 
                userEmail={this.state.email} 
                selectChatFn={this.selectChat} 
                chats={this.state.chats} 
                selectedChatIndex={this.state.selectedChat}
                newChatBtnFn={this.newChatBtnClicked}>
              </ChatListComp>
              {
                this.state.newChatFormVisible ? 
                null :
                <ChatViewComponent 
                  user={this.state.email}
                  chat={this.state.chats[this.state.selectedChat]}>  </ChatViewComponent>
              }
              <Button onClick={this.signOut} className={classes.signOutBtn}>Sign Out</Button>
            </div>
          );
        } else {
          return(<div>LOADING....</div>);
        }
      }

      signOut = () => fb.auth().signOut();


        selectChat = async (chatIndex) => {
          this.setState({ selectedChat: chatIndex });
      }

      newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });


      componentDidMount = () => {
          fb.auth().onAuthStateChanged(async _usr => {
            if(!_usr)
              this.props.history.push('/login');
            else {
              await fb
                .firestore()
                .collection('chats')
                .where('users', 'array-contains', _usr.email)
                .onSnapshot(async res => {
                  const chats = res.docs.map(_doc => _doc.data());
                  await this.setState({
                    email: _usr.email,
                    chats: chats,
                    friends: []
                  });
                })
            }
        });
      }
}
  
export default withStyles(styles)(dashboardComp);