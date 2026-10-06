import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
// Functional Component
function App() {
  return <Box
      component="form"
      noValidate
      autoComplete="off"
      >
      <h1>Hola mundo</h1> 

      <div>
      <TextField variant="filled" />
      </div>

      <div>
      <Button variant="contained"> Hello world </Button>
      </div>
  </Box>
}

export default App
