import React, { useState } from 'react';
import './SocialPage.css';

const SocialPage= () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    setUser(username);
    event.target.reset();
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const newPost = { title, content, author: user, votes: 0 };
    setPosts([...posts, newPost]);
    event.target.reset();
  };

  const handleUpvote = (index) => {
    const newPosts = [...posts];
    newPosts[index].votes++;
    setPosts(newPosts);
  };

  const handleDownvote = (index) => {
    const newPosts = [...posts];
    newPosts[index].votes--;
    setPosts(newPosts);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePostsPerPage = (event) => {
    setPostsPerPage(parseInt(event.target.value));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>My Social Media Page</h1>
      <button onClick={handleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {user ? (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={handleLogout}>Logout</button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <br />
            <label htmlFor="content">Content:</label>
            <textarea id="content" name="content" required></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
      <hr />
      <input type="text" placeholder="Search" onChange={handleSearch} />
      <br />
      <label htmlFor="postsPerPage">Posts per page:</label>
      <select id="postsPerPage" value={postsPerPage} onChange={handlePostsPerPage}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <hr />
      {currentPosts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <p>Votes: {post.votes}</p>
          <button onClick={() => handleUpvote(index)}>Upvote</button>
          <button onClick={() => handleDownvote(index)}>Downvote</button>
          <hr />
        </div>
      ))}
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : null}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialPage;
