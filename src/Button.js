import React from 'react'
import PropTypes from 'prop-types'

function Button({ className, text, onClick = () => {} }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
