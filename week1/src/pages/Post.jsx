import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/post.css';

export default function Post() {
    const [ posts, setPosts] = useState([])
    const [ loader, setLoader] = useState(true)

    useEffect(()=> {
        fetchPosts();  //function
        console.log(posts)       
    },[])

    async function fetchPosts() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(json => setPosts(json))
        .then(setLoader(false))
    }
    return (
        <main className='posts text-center'>
            <div className="pg-header">
        <div className="container">
          <div className=" align-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb text-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Posts</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='containerContent'>
        {loader
        ? <div className=' text-center'>Loading...........</div>
        : <div className='section'>
            {posts.map(post => {
                return (
                    <div className='cards' key={post.id}>
                        <div className='detail'>
                            <div>
                                <h4 className='title'>{post.title}</h4>
                                <p className="text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>}
      </div>
        </main>
    )
    
};
