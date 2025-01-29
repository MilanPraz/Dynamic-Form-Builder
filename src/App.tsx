import './App.css'
import FormBuilder from './components/FormBuilder'

function App() {

  return (
    <div className='min-h-screen p-4 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold text-mint-500 text-center'>Dynamic Form Builder</h1>

      <FormBuilder/>
    </div>
  )
}


export default App
