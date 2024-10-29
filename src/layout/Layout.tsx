import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='container overflow-hidden font-display text-primary'>
       <Outlet />
    </div>
  )
}

export default Layout