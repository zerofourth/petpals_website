// Home.js
import React, { useState, useEffect } from 'react';
import { auth, db } from "../../../firebase-config";
import CreatePost from './CreatePost';

function SocialPage() {
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userVotes, setUserVotes] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (auth.currentUser) {
      db.collection('userVotes')
        .doc(auth.currentUser.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            setUserVotes(doc.data().votes);
          }
        });
    }
  }, []);

  const handleComment = (postId) => {
    if (newComment) {
      db.collection('posts').doc(postId).collection('comments').add({
        text: newComment,
        timestamp: new Date(),
        user: auth.currentUser.displayName,
      });
      setNewComment('');
    }
  };

  const handleUpvote = (postId) => {
    if (auth.currentUser && !userVotes.includes(postId)) {
      db.collection('posts')
        .doc(postId)
        .update({ upvotes: firebase.firestore.FieldValue.increment(1) });

      db.collection('userVotes')
        .doc(auth.currentUser.uid)
        .set({ votes: [...userVotes, postId] });

      setUserVotes([...userVotes, postId]);
    }
  };

  const handleDownvote = (postId) => {
    if (auth.currentUser && !userVotes.includes(postId)) {
      db.collection('posts')
        .doc(postId)
        .update({ downvotes: firebase.firestore.FieldValue.increment(1) });

      db.collection('userVotes')
        .doc(auth.currentUser.uid)
        .set({ votes: [...userVotes, postId] });

      setUserVotes([...userVotes, postId]);
    }
  };

  return (
    <div>
      <h1>Reddit Clone</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Upvotes: {post.upvotes}</p>
            <p>Downvotes: {post.downvotes}</p>

            <button onClick={() => handleUpvote(post.id)}>Upvote</button>
            <button onClick={() => handleDownvote(post.id)}>Downvote</button>

            <input
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={() => handleComment(post.id)}>Add Comment</button>
          </li>
        ))}
      </ul>
      <CreatePost />
    </div>
  );
}

export default SocialPage;
