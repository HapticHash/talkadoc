import React from 'react';
import ChatListComp from '../chatlist/chatlist';
const fb = require("firebase");

class dashboardComp extends React.Component {
    
    state = {  }

    constructor() {
        super();
        this.state = {
            selChat : null,
            newChatFormVisi : false,
            email : null,
            chats : []
        };
    }

    render() { 
        return (
        <div>
            <ChatListComp 
            history={this.props.history}
            newChatBtnFunc={this.newChatButtonClicked}
            selectChatFunc={this.selectaChat}
            usrchats={this.state.chats}
            usremails={this.state.email}
            selChatIndex={this.state.selChat}> </ChatListComp>
        </div>
        );
    }

    selectaChat = (chatIndex) => {
        console.log('A chat is selected.', chatIndex);
    }

    newChatButtonClicked = () => this.setState({ newChatFormVisi: true, selChat: null })

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
                console.log(this.state);
              })
          }
      });
    }
}
  
 
export default dashboardComp;