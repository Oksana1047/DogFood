/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { FaShoppingCart } from 'react-icons/fa'
import headerStyles from './header.module.css'

import { getTokenSelector, logOut } from '../../redux/slices/userSlise'
import logo1 from '../../images/logo1.png'
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
              <img className={headerStyles.logo} src={logo1} alt="" />

            </Link>

          </li>
          <div className={headerStyles.buttons}>
            {userToken ? (
              <div>
                <Link
                  to="/"
                  className={headerStyles.link}
                >
                  <button type="button" className={headerStyles.btn} onClick={handleLogOut}>
                    Выйти
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/signin"
                  className={headerStyles.link}
                >
                  <button type="button" className={headerStyles.btn}>
                    Войти
                  </button>
                </Link>
              </div>
            )}
          </div>
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

          </li>
        </ul>
      </nav>

    </header>
  )
}
