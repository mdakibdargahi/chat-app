import React, { useCallback } from 'react';
import { Alert, Button, Drawer, Icon } from 'rsuite';
import Dashboard from '.';
import { isOfflineForDatabase } from '../../context/profile.context';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import { auth, database } from '../../misc/firebase';

const DashBoardToggle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(max-width: 992px)');

  const onSignOut = useCallback(async () => {
    try {
      await database
        .ref(`/status/${auth.currentUser.uid}`)
        .set(isOfflineForDatabase);
      await auth.signOut();
      Alert.info('Signed out', 4000);

      close();
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  }, [close]);

  // const onSignOut = useCallback(async() => {
  //   database
  //     .ref(`/status/${auth.currentUser.uid}`)
  //     .set(isOfflineForDatabase)
  //     .then(() => {
  //       auth.signOut();
  //       Alert.info('Signed Out', 4000);
  //       close();
  //     })
  //     .catch(error => {
  //       Alert.error(error.message, 4000);
  //     });
  // }, [close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard " />
        Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
