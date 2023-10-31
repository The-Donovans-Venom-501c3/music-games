import logo from '../../assets/svg/Logo.svg'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
      <a href="/"><img src={logo} alt="" /></a>
    </header>
  )
}
