import './App.css'
import FormBuilder from './components/FormBuilder'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-6">
        {/* Header */}
        <header className="flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3 text-neutral-100">
            <span>Dynamic Form Builder</span>
          </h1>
        </header>

        {/* Content */}
        <main className="flex-1">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-4 md:p-6">
            <FormBuilder />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
