import './App.css'
import Pop from './Components/Pop';
import Add from './Components/Add';
import {BrowserRouter,Route} from 'react-router-dom'
const App = ()=>{
  return (
  <div className='App'>
    <BrowserRouter>
    <h1> <center> TODO LIST</center></h1>
   <Route path="/" exact render={(props)=><Add {...props}/>}/>
   <Route path="/edit" exact render={(props)=><Pop {...props}/>}/>
    </BrowserRouter>
  </div>
)
}
export default App