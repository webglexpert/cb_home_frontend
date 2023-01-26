import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LandingPage from './component/LandingPage';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';

// import {
//   BrowserRouter,
//   createBrowserRouter,
//   RouterProvider,
//   Router,
//   Route,
//   Routes,
//   Link,
//   NavLinkProps,
// } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'normal', // Normally, it is "semibold"
      },
      // 3. We can add a new visual variant
      variants: {
        link: {
          _hover: {
            textDecoration: 'none',
          },
        },
        linkNavbar: {
          fontSize: 'xl',
          paddingY: '25px',
          background: 'none',
          color: 'white',
          borderRadius: '0px',
          _hover: {
            background: 'rgba(0, 0, 0, 0.2)',
          },
        },
        secondary: {
          color: '#000',
          background: '#fc9426',
          _hover: {
            background: '#ec7b03',
            color: 'none',
          },
        },
        linkPrimary: {
          height: '0px',
          paddingX: '0px',
          paddingBottom: '5px',
          // margin: '0px',
          color: '#00a7e8',
          _hover: {
            textDecoration: 'none',
            color: '#0082b5',
          },
        },
      },
    },

    Text: {
      // 1. We can update the base styles
      baseStyle: {
        fontSize: '18px', // Normally, it is "semibold"
        fontFamily:
          "'Source Sans Pro',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      },
    },
  },
  colors: {
    primary: {
      50: '#0082b5',
      100: '#2da1ec',
      500: '#00a7e8',
    },
    secondary: {
      50: '#fc9426',
      100: '#ec7b03',
      500: '#fc9426',
    },
    grey: {
      50: '#4a4a4a',
      100: '#4a4a4a',
      500: '#4a4a4a',
    },
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/sell-your-house"
              element={<div>sell-your-house</div>}
            />
            <Route
              path="/sell-my-mobile-home-fast-in-oregon"
              element={<div>sell-my-mobile-home-fast-in-oregon</div>}
            />
            <Route
              path="/where-we-buy-mobile-homes"
              element={<div>where-we-buy-mobile-homes</div>}
            />
            <Route
              path="/how-we-buy-houses"
              element={<div>how-we-buy-houses</div>}
            />
            <Route path="/compare" element={<div>compare</div>} />
            <Route path="/testimonials" element={<div>testimonials</div>} />
            <Route path="/faq" element={<div>faq</div>} />

            <Route
              path="/get-a-cash-offer-today"
              element={<div>get-a-cash-offer-today</div>}
            />
            <Route path="/our-company" element={<div>our-company</div>} />
            <Route path="/contact-us" element={<div>contact-us</div>} />
            <Route path="/resource-page" element={<div>resource-page</div>} />
            <Route path="/privacy" element={<div>privacy</div>} />
            <Route path="/blog" element={<div>blog</div>} />
            <Route path="*" element={<div>404 page</div>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
