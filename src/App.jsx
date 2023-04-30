
import { useContext } from 'react'
import './App.css'
import { TransactionContext } from './context/TrackingContext'

function App() {

     const {connectWallet} = useContext(TransactionContext);

  return (
    <>
        <button onClick={connectWallet}>hello</button>
    </>
  )
}

export default App
