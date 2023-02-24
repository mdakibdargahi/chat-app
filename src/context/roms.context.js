import React, { createContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { tranceformToArrWithId } from '../misc/helpers';

const roomContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref('rooms');

    roomListRef.on('value', snap => {
      const data = tranceformToArrWithId(snap.val());
      setRooms(data);
    });

    return () => {
      roomListRef.off();
    };
  }, []);

  return <roomContext.Provider value={rooms}>{children}</roomContext.Provider>;
};
