
import './App.css'
import Home from './Pages/Home'
import { SpeedInsights } from "@vercel/speed-insights/next"
function App() {
 

  return (
    <>
    <Home/>

    {/* Vercel inport */}
    <SpeedInsights/>
   </>
  )
}

export default App
