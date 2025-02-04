import React from 'react'

const AuthHeader = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  if(user && user.accessToken) {
    return {Authorization: 'Bearer ' + user.accessToken}
  } else {
    return {};
  }
}

export default AuthHeader;