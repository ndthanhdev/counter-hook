import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
  },

  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },

  'justify-center': {
    justifyContent: 'center',
  },
  'justify-flex-start': {
    justifyContent: 'flex-start',
  },
  'justify-flex-end': {
    justifyContent: 'flex-end',
  },

  'alignItems-center': {
    alignItems: 'center',
  },
  'alignItems-flex-start': {
    alignItems: 'flex-start',
  },
  'alignItems-flex-end': {
    alignItems: 'flex-end',
  },
})

function FlexContainer({
  children,
  className,
  direction = 'row',
  justify = 'flex-start',
  alignItems = 'flex-start',
}) {
  const classes = useStyles()

  return (
    <div
      className={clsx(
        classes.flexContainer,
        classes[direction],
        classes['justify-' + justify],
        classes['alignItems-' + alignItems],
        className
      )}
    >
      {children}
    </div>
  )
}

FlexContainer.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['column', 'row']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
}

export default FlexContainer
