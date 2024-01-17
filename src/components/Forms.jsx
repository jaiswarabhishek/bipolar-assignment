import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';



const defaultTheme = createTheme();

export default function Forms() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '0px solid black',
            padding: '30px 42px 60px 42px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            borderRadius: '16px',
            width:'fit-content',
            marginLeft:'auto',
            marginRight:'auto',
          }}
        >
          
          <Typography  sx={{marginBottom:'20px',fontSize:'40px',fontWeight:'700'}}>
            XYZ
          </Typography>
            <Typography sx={{marginBottom:'5px',fontSize:'26px',fontWeight:'400'}}>
          Welcome Onboard
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
           <TextField id="name"  sx={{width:'100%',marginBottom:'20px',backgroundColor: '#E7E0EC',borderRadius: '4px',}} label="Your Name" variant="filled" 
            data-testid="name"
           />
           <TextField id="comp_name" sx={{width:'100%',marginBottom:'20px',backgroundColor: '#E7E0EC',borderRadius: '4px',}} label="Company Name" variant="filled"
            data-testid="comp_name"
           />
           <TextField
          id="select_industry"
          select
          variant="filled"
          label='Select Industry'
          sx={{width:'100%',backgroundColor: '#E7E0EC',borderRadius: '4px',}}
          data-testid="select_industry"
         />
          
        
            
            <Typography
            sx={{
                marginTop: '20px',
                marginBottom: '10px',
                color: '#333333',
                fontSize: '16px',
                fontWeight: '600'
            
            }}
            >
                Select Number of Locations
            </Typography>
            <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                width: 'fit-content',
                gap: '10px'
            }}
            >
                <Box
                sx={{
                    border: '0px solid #333333',
                    borderRadius: '4px',
                    backgroundColor: '#E7E0EC',
                    padding: '5px 10px',
                    color: '#222222'
                }}
                >1-10</Box>
                <Box
                sx={{
                    border: '0px solid #333333',
                    borderRadius: '4px',
                    backgroundColor: '#E7E0EC',
                     padding: '5px 10px',
                    color: '#222222'
                }}
                >10-50</Box>
                <Box
                sx={{
                    border: '0px solid #333333',
                    borderRadius: '4px',
                    backgroundColor: '#333333',
                     padding: '5px 10px',
                    color: 'white'
                }}
                >50-150</Box>
                <Box
                sx={{
                    border: '0px solid #333333',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    backgroundColor: '#E7E0EC',
                    color: '#222222'
                }}
                >150+</Box>
            </div>
            
            <Button
              fullWidth
              role='button'
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor:'#333333',borderRadius:'8px' ,padding: '10px 40px'}}
            >
             CONTINUE
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}