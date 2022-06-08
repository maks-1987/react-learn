import './styles/App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - is program lang' },
    { id: 2, title: 'JavaScript2', body: 'JavaScript3 - is program lang' },
    { id: 3, title: 'JavaScript3', body: 'JavaScript2 - is program lang' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // получает post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    // console.log([sort]);
  };

  return (
    <div className="App">
      <Counter />
      <PostForm create={createPost} />
      <hr style={{ margin: '10px 0px' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting by"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' },
          ]}
        />
      </div>
      {posts.length ? <PostList remove={removePost} posts={posts} title="Список постов 2" /> : <h1 style={{ textAlign: 'center' }}>Posts does not!</h1>}
    </div>
  );
}

export default App;
