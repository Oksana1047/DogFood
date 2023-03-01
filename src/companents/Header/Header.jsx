/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { FaShoppingCart } from 'react-icons/fa'
import headerStyles from './header.module.css'

import { getTokenSelector, logOut } from '../../redux/slices/userSlise'
import logo from '../../images/logo.jpg'
import { getAllCartProductsSelector } from '../../redux/slices/cartSlice'

export function Header() {
  const cartProducts = useSelector(getAllCartProductsSelector)
  const userToken = useSelector(getTokenSelector)
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logOut())
  return (
    <header className={headerStyles.wr}>
      <nav>
        <ul className={headerStyles.headerMenu}>
          <li>
            <Link to="/">
              <img className={headerStyles.logo} src={logo} alt="" />
              DogFood
            </Link>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activeLink]: isActive })}
              to="/signin"
            >
              Войти

            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activeLink]: isActive })}
              to="/signup"
            >
              Регистрация

            </NavLink>
          </li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active_link' : undefined)}>
            <FaShoppingCart className="shop-cart-button" />
            <span className={headerStyles.number}>
              {cartProducts.length}
            </span>
          </NavLink>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.activeLink]: isActive })}
              to="/products"
            >
              Каталог
            </NavLink>
            <button className={userToken ? 'btn btn-warning mx-2' : 'btn btn-light mx-2'} type="button" onClick={handleLogOut}>Выйти</button>
          </li>
        </ul>
      </nav>

    </header>
  )
}
