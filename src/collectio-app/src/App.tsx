import { Route, Routes } from 'react-router'
import DefaultPage from './pages/DefaultPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
    </Routes>
  )
}

export default App
