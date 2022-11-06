import { Link } from 'react-router-dom'

export default function Error() {
    return(
        <main>
        <div className="pg-header">
         <div className="container">
           <h1>404 Error</h1>
         </div>
       </div>
       <div className="containerContent">
         <p>Page not found...</p>
         <Link to="/" className="btn">Go Back to Homepage</Link>
       </div>
     </main>
   )
 };
