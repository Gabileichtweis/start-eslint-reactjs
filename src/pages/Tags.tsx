import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Tags: React.FC = () => {
  const [tag, setTag] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const novoEstado = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(e.target.value);
    setTag(e.target.value); /* para definir a tag vamos pegar o que foi digitado no valor do target no evento chamado na linha 26(fazer console só do e para entender o target) */
  };

  const addTag = () => {
    setList([... list, tag]); /* ... -> spread operator (adiciona outras coisas ao array) pega o list e adiciona o tag */
    setTag('');
  };

  return(
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant='h3'>
                Tags
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <TextField fullWidth label='Tag' onChange={e => novoEstado(e)} />
      </Grid>

      <Grid item xs={2}>
        <Button variant='contained' onClick={addTag}>
            Cadastrar
        </Button>
      </Grid>

      <Grid item xs={12}>
        {list.map(item => {
          /* o item é a palavra (tag) */
          return (
            <>
              <Typography key={item} variant='h5'>
                {item}
              </Typography>
              <Divider sx={{marginBottom: '20px'}}/>
            </>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Tags;