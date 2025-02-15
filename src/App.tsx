
import './App.css'
import Counter from './components/counter/Counter'
import { Header } from './components/header/Header'
import Section from './components/section/Section'

function App() {


  return (
    <div>
      <Header title={'Header Title'}/>
      <Section>
        This Is The Section!
      </Section>
      
      <Counter/>
    </div>
  )
}

export default App
