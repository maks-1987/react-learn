import './styles/App.css';
import Counter from './components/Counter';
import { useRef, useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - is program lang' },
    { id: 2, title: 'JavaScript', body: 'JavaScript - is program lang' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // console.log(bodyInputRef.current.value);
    const newPost = {
      title,
      body
    }
    console.log(newPost)
  };

  return (
    <div className="App">
      <Counter />
      <form className="form-posts">
        {/* управляемій компонент */}
        <MyInput value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="post name" />
        <MyInput value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="post name" />
        {/* неуправляемый/неконтролируемый компонент */}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="post descr" /> */}
        <MyButton onClick={addNewPost}>Edit post</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 2" />
    </div>
  );
}

export default App;
