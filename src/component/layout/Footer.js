import React from 'react';
import '../../styles/main.css';
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Box, Button, Text, Stack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      {/* footer */}

      <Box
        bg={'primary.500'}
        className={'main-div'}
        textAlign={'center'}
        color={'white'}
      >
        <Box paddingX={'50px'}>
          <Box display={'flex'} marginX={'auto'} justifyContent={'center'}>
            <Stack
              spacing={4}
              direction="row"
              marginY={'50px'}
              textAlign={'center'}
              display={'flex'}
            >
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="get-a-cash-offer-today">
                    Get A Cash Offer Today
                  </NavLink>
                </Text>
              </Button>
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="how-we-buy-houses">Contact Us</NavLink>
                </Text>
              </Button>
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="get-a-cash-offer-today">How It Works</NavLink>
                </Text>
              </Button>
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="faq">FAQ</NavLink>
                </Text>
              </Button>
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="our-company">Our Company</NavLink>
                </Text>
              </Button>
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="resource-page">Resources</NavLink>
                </Text>
              </Button>
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="privacy">Privacy Policy</NavLink>
                </Text>
              </Button>
              <Button colorScheme="white" variant="link">
                <Text as="b" fontSize={'sm'}>
                  <NavLink to="blog">Blog</NavLink>
                </Text>
              </Button>
            </Stack>
          </Box>

          <Box marginY={'auto'}>
            <FaFacebookSquare className="header-icons" />
            <FaYoutubeSquare className="header-icons" />
            <FaInstagramSquare className="header-icons" />
          </Box>
          <Text fontSize="xs" marginY={'20px'}>
            We are a real estate solutions and investment firm that specializes
            in helping homeowners get rid of burdensome houses fast. We are
            investors and problem solvers who can buy your house fast with a
            fair all cash offer.
          </Text>
          <Text fontSize="sm">
            © 2023 Oregon Cash Home Buyers - Powered by Carrot
          </Text>
        </Box>
      </Box>
    </>
  );
}
