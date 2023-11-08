import React from 'react';

const avatarStyle = {
  width: '30px', // Adjust the width as needed
  height: '30px', // Adjust the height as needed
};

export default function Avatar() {
  return (
    <div className="rcw-avatar" style={avatarStyle}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frepository-images.githubusercontent.com%2F156847937%2F2ac66980-0f3d-11eb-8e62-693087aa1f67&f=1&nofb=1&ipt=dbb3337ed3129899393e0c4ee92791eccac68795494e9a50c6adba30b7d35561&ipo=images"
        alt="Bot"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
