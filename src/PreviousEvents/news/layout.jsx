
import React from 'react'
import { Link,Outlet  } from 'react-router-dom';


function Layout() {
  return (
    <div className='wrapper'>
      
      <div className='shiva'>
        <Link to="/ap"><p>Andhra Pradesh &nbsp; &nbsp; &nbsp; </p></Link>
        <Link to="/ts/tsst"><p>Telangana  &nbsp; &nbsp; &nbsp; </p></Link>
        <Link to="/tamil/tamilst"><p>TamilNadu &nbsp; &nbsp; &nbsp;  </p></Link>
        <Link to="/kerala/keralast"><p>Kerala</p></Link>
      </div>
      {/* Outlet renders the child components based on the route */}
      <Outlet />
    </div>
  )
}

export default Layout;
