const styles = theme => ({
    root: {
      backgroundColor: '#eee',
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
      
    },
    listItem: {
      cursor: 'pointer',
      backgroundColor: '#fff',
      width: '95%',
      margin: '0 auto',
      borderRadius: '10px'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    }
  });
  
  export default styles;