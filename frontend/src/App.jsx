import './App.css'
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"

// function App() {
//   return (
//   <>
//     <Text display="E aí doidão"/>
//     <Text display="Felicidade"/>
//   </>
//   )
// }

// function Text({display}){
//   return(
//     <div>
//       <p>{display}</p>
//     </div>
//   )
// }

function App() {
  const movieNumber = 1;


  return (
  <main className="main-content">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>

    </Routes>
  </main>
  )
}


export default App
