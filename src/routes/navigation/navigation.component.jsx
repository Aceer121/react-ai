import { Fragment } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { ReactComponent as RobotLogo } from '../../assets/robot.svg'; // Ensure the correct import path
import './navigation.styles.scss';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <RobotLogo className='logo' style={{ width: '50px', height: '50px' }} /> {/* Ensure the SVG has dimensions */}
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' onClick={() => navigate('/about')}>
            About
          </Link>
          <button className='nav-link' onClick={() => navigate('/signin')}>
            Sign In
          </button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
