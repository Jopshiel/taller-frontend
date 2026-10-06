
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// Importante para
import { useState } from 'react'// OBS: react es un objeto a nivel de funcion, el objeto react viene con muchos atributos, entonces lo que hacemos es tan solo importar la propiedad "useState", puedes sacar contenidos de objetos

// Functional Component
function App() {
  const [nombre, setNombre] = useState(" ");
  const handleSaludo = () => {
    //setNombre("jopshiel")
  }

  return <Box
    className='text-center'
    component="form"
    noValidate
    autoComplete="off"
  >
    <div>
      <h1>Hola mundo {nombre}</h1> {/*entre llaves para poner la variable*/}
    </div>

    <div className='mt-3'>
      <TextField variant='standard' value={nombre} onChange={(e)=>setNombre(e.target.value)}/> {/*Con esta linea modificamos el valor de la variable nombre dinamicamente*/}
    </div>

    <div className='mt-3 pt-2' >
      <Button onClick={handleSaludo} variant="contained">Saludame</Button>
    </div>
  </Box>
}

export default App
