import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from './HeaderContainer';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import { useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";

const App = () => {
  useEffect(() => {
  }, [])
  return (<>
    <BrowserRouter>
      <CssBaseline />
      <Box>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column' }} >
          <HeaderContainer />
          <Box flex={1} display="flex">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/content' element={<Content />} />
            </Routes>
          </Box>
        </Box>
      </Box>

    </BrowserRouter>
  </>)
}

export default App;