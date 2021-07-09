import { ReactComponent as Logo } from 'assets/images/Icon.svg'
import User from 'assets/images/Img.png'
import './styles.scss'

const Header = () => (
  <header className="header">
    <Logo />
    <span className="header__user">User Name <img src={User} alt="User" /></span>
  </header>
)

export default Header
