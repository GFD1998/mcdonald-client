import { NavLink } from 'react-router-dom';
import NavStyles from '../styles/nav.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
            <NavLink to="/" className={NavStyles.navLinks}>HOME</NavLink>
            <NavLink to="/menuitem" className={NavStyles.navLinks}>MENU ITEM</NavLink>
            <NavLink to="/allergen" className={NavStyles.navLinks}>ALLERGENS</NavLink>
            <NavLink to="/ingredient" className={NavStyles.navLinks}>INGREDIENTS</NavLink>
            <NavLink to="/nutritionalinformation" className={NavStyles.navLinks}>NUTRITIONAL INFORMATION</NavLink>
      </nav>
    </>
  );
}

export default Navigation;