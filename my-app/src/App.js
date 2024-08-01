import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WebsiteDesignBenefits from './pages/240801-uiux/uiux-1';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/240801/websitedesignbenefits" element={<WebsiteDesignBenefits />} />
          <Route path="/" element={<Navigate replace to="/240801/websitedesignbenefits" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;