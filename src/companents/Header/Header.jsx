/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import headerStyles from './header.module.css'
import { useAppContext } from '../../context/AppContext'

export function Header() {
  const { removeToken, userToken } = useAppContext()
  return (
    <header className={headerStyles.wr}>
      <nav>
        <ul className={headerStyles.headerMenu}>
          <li>
            <Link to="/">Home</Link>
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
              Food
            </NavLink>
            <button className={userToken ? 'btn btn-info mx-2' : 'btn btn-light mx-2'} type="button" onClick={() => removeToken()}>Выйти</button>
          </li>
        </ul>
      </nav>

    </header>
  )
}
