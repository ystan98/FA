import { useState } from 'react'
import Scorecard from './Home'
import { Container } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="md">
        <Scorecard />
    </Container>
  )
}

export default App
