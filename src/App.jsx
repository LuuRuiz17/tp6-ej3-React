import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from "react-bootstrap";
import Saludo from "./components/Saludo";
import 'animate.css';
import { useState } from 'react';

function App() {
  const [msj, setMsj] = useState("");

  const mostrarMensaje = () => {
    setMsj(" (from changed state)");
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Saludo msj = {msj}></Saludo>
      <button className='mt-5 btn-mostrar-mensaje' onClick={mostrarMensaje}>Mostrar mensaje</button>
    </Container>
  )
}

export default App
