import LipiCoffee from './main/MainCafe'
import './index.css'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <LipiCoffee />
      <Analytics />
    </>
  )
}

export default App
