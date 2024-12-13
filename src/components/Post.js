import React, { useState, useEffect } from 'react';
import './Post.css';

const Post = ({ title, content, author, image }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="post">
      <h2>{title}</h2>
      <img src={image} alt={title} className="post-image"/>
      <p>{content}</p>
      <p><strong>{author}</strong></p>
        <div className="actions">
        <button onClick={handleLike} className="like-button">Curtir</button> {likes}
        <button onClick={handleDislike} className="dislike-button">Descurtir</button> {dislikes}
        </div>
        {likes > 10 && <p className="popular-text"><strong>Post Popular!</strong></p>}
    </div>
  );
};

export default Post;