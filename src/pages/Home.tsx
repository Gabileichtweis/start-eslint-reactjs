import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const date: string = '8/5';

  // if (date === '8/3') {
  //   return <Typography variant="h2">Feliz dia das Mulheres!</Typography>;
  // }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3">Home</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        {date !== '8/3' ? (
          <>
            <Paper elevation={5} sx={{ padding: '20px' }}>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ipsum autem placeat eos suscipit
                velit recusandae laboriosam iusto nesciunt repellat? Quam fugit recusandae ullam. Ab repudiandae
                voluptatum nesciunt obcaecati asperiores.
              </Typography>
              <Button style={{ marginTop: '10px' }} variant="contained">
                Contained Primary
              </Button>
            </Paper>
          </>
        ) : (
          <Paper elevation={5} sx={{ padding: '20px' }}>
            <Typography variant="h2">Feliz dia das Mulheres!</Typography>
          </Paper>
        )}
      </Grid>

      <Grid item xs={12} sm={6}>
        <Paper elevation={5} style={{ padding: '20px' }}>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ipsum autem placeat eos suscipit velit
            recusandae laboriosam iusto nesciunt repellat? Quam fugit recusandae ullam. Ab repudiandae voluptatum
            nesciunt obcaecati asperiores.
          </Typography>
          <Button style={{ marginTop: '10px' }} variant="outlined">
            Outlined
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
