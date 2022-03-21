
import './App.css';
import Mensaje from './mensaje'

const Description = () => {
  return <p>Esta es la descripcion del componente. </p>
}

const App = () => {


  return (
    <div className="App">
      <Mensaje color='red' message='esta es '/>
      <Mensaje color='blue' message='la prueba '/>
      <Mensaje color='green' message='de props '/>
      <Description />

    </div>
  );
}

export default App;
