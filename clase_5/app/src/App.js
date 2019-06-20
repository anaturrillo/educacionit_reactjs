import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import './App.css';
import Grid from "@material-ui/core/Grid";
import TransitionComponent from './TransitionComponent'
// Este ejemplo usa Hooks (nuevo feature de react)
// https://es.reactjs.org/docs/hooks-intro.html

function App() {
  const [inProp, setInProp] = useState(true);
  return (
      <Grid  justify="space-around"
             alignItems="center"
             container
             spacing={3}
             style={{textAlign: 'center'}}
      >

        <Grid item xs={6} >
          <Button color="primary" variant="contained" onClick={() => setInProp(!inProp)}>Botón!</Button>
        </Grid>
        <Grid item xs={6} style={{color: 'red', fontWeight:'bold'}} >
          <TransitionComponent in={inProp} />
        </Grid>
      </Grid>

  );
}

export default App;
