import React, { useState } from 'react';
import { db, storage, auth } from "../../../firebase-config";

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title) {
      // Create a new post in Firebase Firestore
      const newPost = {
        title,
        content,
        user: auth.currentUser.displayName,
        timestamp: new Date(),
      };

      db.collection('posts')
        .add(newPost)
        .then((docRef) => {
          // Handle image and video uploads
          if (imageFile) {
            storage
              .ref()
              .child(`post_images/${docRef.id}`)
              .put(imageFile)
              .then((snapshot) => {
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                  db.collection('posts').doc(docRef.id).update({ image: downloadURL });
                });
              });
          }

          if (videoFile) {
            storage
              .ref()
              .child(`post_videos/${docRef.id}`)
              .put(videoFile)
              .then((snapshot) => {
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                  db.collection('posts').doc(docRef.id).update({ video: downloadURL });
                });
              });
          }
        });

      setTitle('');
      setContent('');
      setImageFile(null);
      setVideoFile(null);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
