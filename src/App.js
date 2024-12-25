import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './sign-up/SignUp';
import SignIn from './sign-in/SignIn';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

function App() {
       const routes = createHashRouter{
  return (
    <Router basename="/Video-Summary-App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ marginBottom: 1 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Video Summarization
            </Typography>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
            <Button color="inherit" component={Link} to="/signin">
              Sign In
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
