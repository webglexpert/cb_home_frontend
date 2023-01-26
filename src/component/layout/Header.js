import React, { useState } from 'react';
import '../../styles/main.css';
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { RiArrowDownSFill } from 'react-icons/ri';

import { Box, Button, Text, Stack } from '@chakra-ui/react';

export default function Header() {
  const [dropdownMenuState, setdropdownMenuState] = useState(false);
  const [dropdownButtonState, setdropdownButtonState] = useState(false);
  return (
    <>
      <Box
        className="nabvar"
        textAlign={'center'}
        bg="primary.100"
        display={'flex'}
        paddingY={'3px'}
        justifyContent={'center'}
      >
        <Text as="b" marginRight={'15px'} marginY={'auto'} color={'white'}>
          Call Us! (541) 236-3095
        </Text>
        <Box marginRight={'30px'} marginY={'auto'}>
          <Stack spacing={4} direction="row">
            <Button color="white" variant="link">
              <NavLink to="get-a-cash-offer-today">
                Get A Cash Offer Today
              </NavLink>
            </Button>
            <Button color="white" variant="link">
              <NavLink to="our-company">Our Company</NavLink>
            </Button>
            <Button color="white" variant="link">
              <NavLink to="contact-us">Contact Us</NavLink>
            </Button>
          </Stack>
        </Box>
        <Box display={'inline'} marginY={'auto'}>
          <FaFacebookSquare className="header-icons" />
          <FaYoutubeSquare className="header-icons" />
          <FaInstagramSquare className="header-icons" />
        </Box>
      </Box>
      <Box
        textAlign={'center'}
        className={'main-div'}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <NavLink to="/">
          <img
            alt="no_image"
            src="/assets/images/Screen-Shot-2018-10-31-at-1.06.07-PM.png"
            width="284px"
          />
        </NavLink>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        bg={'primary.500'}
        height={'50px'}
      >
        <Box display={'inline-block'} position={'relative'}>
          <Button
            variant={'linkNavbar'}
            onMouseOver={() => setdropdownButtonState(true)}
            onMouseLeave={() => setdropdownButtonState(false)}
            background={
              dropdownMenuState || dropdownButtonState
                ? 'primary.50'
                : 'primary.500'
            }
          >
            <Text as="b">
              <NavLink to="sell-your-house">Sell Your House</NavLink>
            </Text>
            <RiArrowDownSFill />
          </Button>
          <Box
            position={'absolute'}
            background={'primary.50'}
            display={
              dropdownMenuState || dropdownButtonState ? 'block' : 'none'
            }
            onMouseOver={() => setdropdownMenuState(true)}
            onMouseLeave={() => setdropdownMenuState(false)}
            paddingY={'10px'}
          >
            <Button variant={'linkNavbar'}>
              <NavLink to="sell-my-mobile-home-fast-in-oregon">
                Sell Your Mobile house
              </NavLink>
            </Button>
          </Box>
        </Box>

        <Button variant={'linkNavbar'}>
          <NavLink to="where-we-buy-mobile-homes">
            Where We Buy Mobile Homes
          </NavLink>
        </Button>
        <Button variant={'linkNavbar'}>
          <NavLink to="how-we-buy-houses">How It Works</NavLink>
        </Button>
        <Button variant={'linkNavbar'}>
          <NavLink to="compare">Compare</NavLink>
        </Button>
        <Button variant={'linkNavbar'}>
          <NavLink to="testimonials">Testimonials</NavLink>
        </Button>
        <Button variant={'linkNavbar'}>
          <NavLink to="FAQ">FAQ</NavLink>
        </Button>
      </Box>
    </>
  );
}
