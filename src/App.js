import React from 'react';
import Post from './components/Post';
import './App.css';

const App = () => {
    const posts = [
        {
          title: "Meu Primeiro Post",
          content: "Este é o conteúdo do meu primeiro post.",
          author: "Autor Desconhecido",
          image: "https://via.placeholder.com/150",
        },
        {
            title: "Segunda Postagem",
            content: "Conteúdo da minha segunda postagem. Mais um teste...",
            author: "Outro Autor",
            image: "https://via.placeholder.com/150/FF0000",
          },
          {
            title: "Terceira Postagem",
            content: "Testando mais um post na plataforma.",
            author: "Autor Número 3",
            image: "https://via.placeholder.com/150/00FF00",
          },
      ]


    return (
        <div className='app'>
            <h1>Blog Posts</h1>
            <div className="posts-container">
            {posts.map((post, index) => (
                <Post key={index}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    image={post.image}
                />
                ))}
            </div>

        </div>

  );
};

export default App;
