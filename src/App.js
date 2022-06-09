import './styles/App.css';
import Counter from './components/Counter';
import { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - is program lang' },
    { id: 2, title: 'Pyton', body: 'Pyton - is program lang' },
    { id: 3, title: 'C++', body: 'C++ - is program lang' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('worked');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  },[searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // получает post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // console.log([sort]);
  };

  return (
    <div className="App">
      <Counter />
      <PostForm create={createPost} />
      <hr style={{ margin: '10px 0px' }} />
      <div>
        <MyInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Searh..." />
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
      {sortedAndSearchedPosts.length ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 2" /> : <h1 style={{ textAlign: 'center' }}>Posts does not!</h1>}
    </div>
  );
}

export default App;
