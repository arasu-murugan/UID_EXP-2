// src/App.js

import React from 'react';
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={styles.appContainer}>
      <UserProfile
        name="Arasu M"
        bio="UI/UX designer focused on creating intuitive and user-friendly digital interfaces."
        email="Arasum@gmail.com"
        phone="(987) 654-3210"
        profilePicture={`${process.env.PUBLIC_URL}/arasu.jpg`}
      />
      <UserProfile
        name="DineshBabu M"
        bio="Full-stack developer with a passion for creating scalable web applications and unique user experiences."
        email="dinesh2932005@gmail.com"
        phone="(123) 456-7890"
        profilePicture={`${process.env.PUBLIC_URL}/dbabu.jpg`}
      />

      

      <UserProfile
        name="John"
        bio="DevOps engineer with a strong focus on cloud infrastructure and automation."
        email="john@gmail.com"
        phone="(555) 789-0123"
        profilePicture={`${process.env.PUBLIC_URL}/john.jpg`}
      />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
  },
};

export default App;
