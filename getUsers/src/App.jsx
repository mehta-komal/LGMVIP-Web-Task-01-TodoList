
import './App.css'
import GetUsers from './component/GetUsers'
import { Provider } from 'react-redux'
import { myProductStore } from './redux'

function App() {


  return (
    <Provider store={myProductStore}>
    <GetUsers />
    </Provider>
  )
}

export default App
