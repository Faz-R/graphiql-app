import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <NavLink to='/'>Welcome</NavLink>
        <NavLink to='graphiql'>GraphiQL</NavLink>
        <Link to='/auth'>Sign In</Link>
        <button type='button'>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
