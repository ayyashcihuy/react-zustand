import './App.css'
import { BearCounter } from './components/BearPopulation/Bear'
import { ButtonPopulation } from './components/HandlePopulation/HandlePopulation'

function App() {

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='bg-gray-700 p-4 rounded-md'>
        <BearCounter />
        <ButtonPopulation />
      </div>
    </div>
  )
}

export default App
