import style from './Navbar.module.scss'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type NavLinkType = {
    to: string;
    children: string;
}

const Navbar = () => {
  return (
    <nav className={ style.nav }>
        <div className={ style.items }>
            <NavLnk to="/">
                Home
            </NavLnk>
            <NavLnk to="/blog">
                Blog
            </NavLnk>
            <NavLnk to="/login">
                Log in
            </NavLnk>
        </div>
    </nav>
  )
};

function NavLnk({to, children}: NavLinkType) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname })

    return (
        <Link 
            to={ to } 
            className={ `${ style.item } ${isActive ? style.active : ''}` }
        >
            { children }
        </Link>
    )
}

export default Navbar;
