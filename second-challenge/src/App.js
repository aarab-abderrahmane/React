import Header from './components/header'
import Post from './components/post'
import Tag from './components/tag'
import './App.css'

function App() {

  const image_src = "images/images.jpeg"

  const para= "this is paragraph";

  return (
    <>
      <Header/>
      <div className='container'>
          <div className='first-section'>
                <Post  title="POST" author="ahmed" paragraph={para}/>
                <Post  title="JAVA" author="dzad" paragraph={para}/>
                <Post  title="php" author="zfzdze" paragraph={para}/>
          </div>
          <div className='first-section'>
              <Tag title="ded" photo={image_src}><p>this is title</p></Tag>
          </div>
      </div>
    </>
  );
}

export default App;
