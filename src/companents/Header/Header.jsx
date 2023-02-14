/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import headerStyles from './header.module.css'

import { getTokenSelector, logOut } from '../../redux/slices/userSlise'

export function Header() {
  const userToken = useSelector(getTokenSelector)
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logOut())
  return (
    <header className={headerStyles.wr}>
      <nav>
        <ul className={headerStyles.headerMenu}>
          <li>
            <Link to="/">

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
