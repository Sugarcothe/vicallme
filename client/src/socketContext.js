import React, {createContext, useState, useRef, useEffect} from 'react'

import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io(`http://localhost:5000`)

const ContextProvider = ({}) => {

  const answerCall = () => {
    useEffect(() => {
      navigator.mediaDev
    }) 
  }

  const callUser = () =>  {

  }

  const leaveCall = () => {

  }

}

