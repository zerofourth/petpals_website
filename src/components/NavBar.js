import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase-config';
import { AuthContext } from '../context/auth';
import style from './NavBar.module.css';
import Modal from 'react-modal';
import EmergencyChatBox from './EmergencyChatBox';

Modal.setAppElement('#root');

function NavBar() {
  const { user } = useContext(AuthContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const logout = async () => {
    await auth.signOut();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  let uid;
  if (user !== null) {
    uid = user.uid;
  }

  return (
    <div className={style.nav_container}>
      {user ? (
        <>
          <NavLink to={'/'}>
            <button className={style.button51}>Home</button>
          </NavLink>
          <NavLink to={'/message'}>
            <button className={style.button51}>Messages</button>
          </NavLink>
          <NavLink to={`/user/${uid}`}>
            <button className={style.button51}>My Profile</button>
          </NavLink>
          <NavLink to={'/'}>
            <button className={style.button51} onClick={logout}>
              Sign Out
            </button>
          </NavLink>
          <button className={style.button51} onClick={openModal}>
            ChatBot
          </button>
        </>
      ) : (
        <>
          <NavLink to={'/'}>
            <button className={style.button51}>Home</button>
          </NavLink>
          <NavLink to={'/login'}>
            <button className={style.button51}>Login</button>
          </NavLink>
          <NavLink to={'/signup'}>
            <button className={style.button51}>Sign up</button>
          </NavLink>
          <NavLink to={'/about'}>
            <button className={style.button51}>About Us</button>
          </NavLink>
          <button className={style.button51} onClick={openModal}>
            ChatBot
          </button>
        </>
      )}
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      bottom: 20,
      right: 20,
    },
    content: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 'auto',
      top: 'auto',
      transform: 'translate(0, 0)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 20, // Adjust padding as needed
    },
  }}
  ariaHideApp={false}
>
  <button
    className="Modal-close"
    onClick={closeModal}
    style={{
      backgroundColor: 'rgba(0, 56, 168, 0.7)', // Patrol blue background with 20% opacity
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      color: '#ffffff',
      fontSize: '20px',
      borderRadius: '0', // Square shape
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
    }}
  >
    &times;
  </button>
  <EmergencyChatBox />
</Modal>



    </div>
  );
}

export default NavBar;