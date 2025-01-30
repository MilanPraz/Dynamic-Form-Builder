import './App.css'
import FormBuilder from './components/FormBuilder'

function App() {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-mint-500 text-center my-4 flex items-center justify-center space-x-2">
        <span className="text-4xl">✨</span>
        <span>Dynamic Form Builder</span>
        <span className="text-4xl">✨</span>
      </h1>

      <div className="xl:container ">
        <FormBuilder />
      </div>
    </div>
  )
}

export default App
