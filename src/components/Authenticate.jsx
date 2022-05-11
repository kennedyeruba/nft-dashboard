// import {useEffect} from 'react';
import { useMoralis } from "react-moralis";
import MapApi from './MapApi';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Box, Paper, Typography } from "@mui/material";


const Authenticate = () => {
  const { authenticate, isAuthenticated, isAuthenticating, signup, user, account, logout } = useMoralis();

  const authStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh'
    },
    iconContainer: {
      padding: '20px',
      borderRadius: '500%',
    },
    iconText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    fingerPrintIcon: {
      fontSize: '5rem'
    }
  }

  return (
    <Box sx={authStyles.container}>
      {
        !isAuthenticated ? (
          <Paper elevation={5} sx={authStyles.iconContainer} onClick={() => authenticate()}>
            <FingerprintIcon sx={authStyles.fingerPrintIcon}/>
            <Typography sx={authStyles.iconText}>Sign In</Typography>
          </Paper>
        ) : (
          <div>
            <MapApi/>
            <button onClick={() => logout()} disabled={isAuthenticating}>Logout</button>
          </div>
        )
      }
    </Box>
  )

  //   useEffect(() => {
  //   if (isAuthenticated) {
      
  //     return(
  //       <MapApi />
  //     )
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated]);

    // const login = async () => {
    //   if (!isAuthenticated) {

    //     await authenticate({signingMessage: "Log in using Moralis" })
    //       .then(function (user) {
    //         console.log("logged in user:", user);
    //         console.log(user.get("ethAddress"));
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }
    // }
    // if (!isAuthenticated) {
    //   return (
    //     <div>
    //       <button onClick={() => authenticate()}>Authenticate</button>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     {/* <button onClick={() => authenticate()}>Authenticate</button> */}
    //     <button onClick={() => logout()} disabled={isAuthenticating}>Logout</button>
    //   </div>
    // );
    // return (
    //   <div>
    //     <MapApi/>
    //      <button onClick={() => logout()} disabled={isAuthenticating}>Logout</button>
    //   </div>
    // );
  

    // const logOut = async () => {
    //   await logout();
    //   console.log("logged out");
    // }
  // return (
  //   <div>
  //       <h1></h1>
  //     <button onClick={() => authenticate()}>Login With Metamask</button>
      
  //   </div>
  // )
}

export default Authenticate