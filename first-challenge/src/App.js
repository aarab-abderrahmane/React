import Header from './components/header_component.js'
import Post from './components/post_component.js'
import Buttons from './components/buttons_components.js'

function App() {
  return (
      <>
        <Header/>

        <div className="container">
              <div className="left_section">


              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>

              </div>

              <div className="right_section">
                  <Buttons/>
              </div>
              

        </div>

      </>
      
    
  );
}

export default App;
