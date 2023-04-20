import React from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position = "static" color = "inherit">
        <Typography variant="h2" aligne="center">Memories</Typography>
        <img src={memories} alt = "memories" height="460"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify ="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
