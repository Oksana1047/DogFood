import mainStyles from './main.module.css'
import logo3 from '../../images/logo3.jpg'

export function Main() {
  return (
    <main className={mainStyles.wr}>
      <img className={mainStyles.logo3} src={logo3} alt="" />

    </main>
  )
}
