import React, { useState } from 'react';

const NotificationForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [token, setToken] = useState(''); // Add the token from the database or a user's specific token

  const handleSendNotification = async () => {
    await fetch("https://your-server.com/api/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        title,
        body,
      }),
    });
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
};

export default NotificationForm;
