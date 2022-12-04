import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    
    <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4">
        {/*item in the middle*/}
        <Link to="/posts" className="text-dark text-decoration-none">
        <h3>Lizard Global React Assessment</h3>
        </Link>
        <em> by karim aidibi</em>
    
      <hr className="bg-gradient bg-dark" style={{width: "100%", height:"2px"}}></hr>
    </header>
    
  )
}

export default Header;


    
