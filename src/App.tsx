
import {Routes,Route,BrowserRouter} from "react-router-dom"
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/users" element={<UsersPage/>} />
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
