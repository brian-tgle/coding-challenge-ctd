import './styles.scss'

const Footer = () => (
  <footer className="footer">
    <span>{`@ ${(new Date()).getFullYear()} All rights reserved`}</span>
    <span><b>Privacy Policy</b></span>
    <span><b>Term of Use</b></span>
  </footer>
)

export default Footer
