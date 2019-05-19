import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { increase, decrease, increaseAsync } from './store'
import FlexContainer from './FlexContainer'
import Label from './Label'
import Button from './Button'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },

  button: {
    margin: '0 0.125rem',
  },
})

function MainPage() {
  const classes = useStyles()

  function StyledButton(props) {
    return <Button {...{ className: classes.button, ...props }} />
  }

  const value = useSelector(state => state.value)

  const dispatch = useDispatch()

  const handleIncreate = () => dispatch(increase())
  const handleDecreate = () => dispatch(decrease())
  const handleIncreaseAsync = () => dispatch(increaseAsync())

  return (
    <FlexContainer
      className={classes.root}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Label value={String(value)} />
      <FlexContainer className={classes.buttonGroup}>
        <StyledButton text="Increase" onClick={handleIncreate} />
        <StyledButton text="Decrease" onClick={handleDecreate} />
        <StyledButton text="Increase Async" onClick={handleIncreaseAsync} />
      </FlexContainer>
    </FlexContainer>
  )
}

export default function ThemedMainPage() {
  const theme = {}
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  )
}
