import React from 'react'
import PropTypes from 'prop-types'

function Label({ className, value = '' }) {
  return <h3 className={className}>{value}</h3>
}

Label.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
}

export default Label
