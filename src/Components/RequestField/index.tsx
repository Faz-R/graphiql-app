import { IconButton, TextField, Box } from '@mui/material'
import DirectionsIcon from '@mui/icons-material/Directions'
import { useState } from 'react'
import JSONViewer from 'react-json-view';

function RequestField() {
  const [request, setRequest] = useState('')
  const url = 'https://rickandmortyapi.com/graphql';
 const [text, setText] = useState('');
const [data, setData] = useState(null);

  /* useEffect(() => {
    console.log(text);
    
  }, [text]); */

  const resp = async (data = '') => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: data}),
    })
     
    return await response.json( );    
  }

  const giveAnswer = ()=>{
    resp(request).then((r) => setData(r) /* setText(JSON.stringify(r)) */);
    console.log(data);
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '55ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="enter request"
            multiline
            rows={10}
            variant="outlined"
            value={request}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRequest(event.target.value)
            }}
          />
          <IconButton
            color="primary"
            sx={{ p: '10px' }}
            aria-label="directions"
            onClick={giveAnswer}
          >
            <DirectionsIcon />
          </IconButton>
        </div>
      </Box>
      {data ? (
        <JSONViewer src={data} />
      ) : (
        <p>Loading data...</p>
      )}
      <div>{}</div>
    </>
  )
}

export default RequestField
