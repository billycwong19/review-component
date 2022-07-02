import PropTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
  return (
    <header>
        <div className="container" style={{ backgroundColor: bgColor, color: textColor}}>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Reviews',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text: PropTypes.string
} 

export default Header