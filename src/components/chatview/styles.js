import { border } from "@material-ui/system";
import shadows from "@material-ui/core/styles/shadows";

const styles = theme => ({

    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      overflowY: 'scroll',
      top: '50px',
      width: 'calc(100% - 300px)',
      position: 'absolute'
    },
  
    userSent: {
      float: 'right',
      clear: 'both',
      padding: '15px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#B3B2C0',
      color: 'black',
      maxWidth: '300px',
      borderRadius: '20px 20px 0px 20px'
    },
  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '15px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#1aa260',
      color: 'white',
      maxWidth: '300px',
      borderRadius: '0px 20px 20px 20px'
    },
  
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '38px',
      backgroundColor: '#2C2F33',
      position: 'fixed',
      marginLeft: '301px',
      fontSize: '16px',
      textAlign: 'center',
      color: 'white',
      paddingTop: '8px',
      boxSizing: 'border-box'
    }
  
  });
  
  export default styles;