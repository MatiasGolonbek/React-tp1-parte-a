import logo from './logo.svg';
import './App.css';
import Formulario from './Formulario.js';
import TituloCita from './TituloCita.js'
import CrearCita from './CrearCita';
import CardCargada from './CardCargada';


function App() {
  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
          <CrearCita />
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
           <CardCargada />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
