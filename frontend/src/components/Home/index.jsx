import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import ContactSection from './Contact';
import Hero from './Hero';
import ServiceCard from './ServiceCard';
import WorkingCard from './WorkingCard';

function Main() {
  return (
    <Box pt="4rem">
      <Center h="90vh">
        <Hero />
      </Center>
      <Box h="90vh">
        <ServiceCard />
      </Box>
      <Box h="90vh">
        <WorkingCard />
      </Box>
      <Center h="100vh">
        <ContactSection />
      </Center>
    </Box>
  );
}

export default Main;
