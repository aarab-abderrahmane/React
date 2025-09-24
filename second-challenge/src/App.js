import Header from "./components/header";
import Post from "./components/post";
import Tag from "./components/tag";
import "./App.css";

function App() {

  const data = [
  {
    id: 1,
    title: "First Item",
    image: "https://picsum.photos/200/300?random=1",
    node: (
    <>
    <p>the first para.</p>
    <hr></hr>
    </>
    )
  },
   {
    id: 4,
    title: "Second Item",
  },
  {
    id: 2,
    title: "Second Item",
    image: "https://picsum.photos/200/300?random=2",
    node: <p>Here goes the second paragraph example.</p>
  },
  {
    id: 3,
    title: "Third Item",
    image: "images/images.jpeg",
    node: <p>And this is the third example paragraph.</p>
  }
];

  const POST_sata = [

      {
        id : 1 ,
        title : "post 1",
        author : "ahmed",
        paragraph : "this paragraph"
      },
      {
        id : 2 ,
        title : "post 2",
        author : "aarab",
        paragraph : "this paragraph"
      },
      {
        id : 2 ,
        title : "post 3",
        author : "rida",
        paragraph : "this paragraph"
      }

  ]



  const items = data.map((data)=>{
    return(
      <Tag  key={data.id} title={data.title}  photo={data.image} >{data.node}</Tag>
    )
  })


  const posts = POST_sata.map((post)=>{

    const {id,title,author,paragraph} = post

    return (
      <Post key={id} author={author}  title={title} paragraph={paragraph} />
    )
  })


  return (
    <>
      <Header />
      <div className="container">
        <div className="first-section">
          {posts}
        </div>
        <div className="second-section">
              {items}
        </div>
      </div>
    </>
  );
}

export default App;
