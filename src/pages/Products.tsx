import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Products: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);    
  };

  const addList = () => {
    if(name.length) {
      setList([... list, name]);
    }

    console.log('Lista', list);
  };
  return(
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant='h3'>Produtos - {list.length}</Typography> {/* textos/conteudos */}
        <Divider/>
      </Grid>

      <Grid item xs={10}>
        <TextField fullWidth label='Nome do produto' onChange={e => handleChange(e)} /> {/* input */}
      </Grid>

      <Grid item xs={2}>
        <Button variant='contained' onClick={addList}>Cadastrar</Button>
      </Grid>

      <Grid item xs={12}>
        {list.map(item => {
          return (
            <>
              <Typography key={item} variant='h5'>{item}</Typography>
              <Divider sx={{marginBottom: '20px'}}/> {/* hr */}
            </>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Products;