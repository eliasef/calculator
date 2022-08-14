import Calculator from './components/Calculator';
import '../src/components/Calculator.css'
import image from '../src/img/ssonic.png'


function App() {
  return (
    <div>
      <h1>Calculadora</h1>
      <Calculator />
      <img className='img' src={image}></img>
      
    </div>
  );
}

// calc build p/ gerar build

export default App;
