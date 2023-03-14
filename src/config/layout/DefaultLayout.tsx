import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  component: Component,
}) => {
  return (
    <Grid container justifyContent="space-between" style={{ height: '100vh' }}>
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>

      <Grid item xs={12}>
        <Container>
          <Component />
        </Container>
      </Grid>

      <Grid item xs={12} style={{ backgroundColor: '#333', marginTop: '20px' }}>
        <Container>
          <Typography variant="h3">Links </Typography>
          <Typography variant="h3">Trabalhe Conosco </Typography>
          <Typography variant="h3">Redes Sociais </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
