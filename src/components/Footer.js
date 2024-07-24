import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="teal.500" p={4} color="white" textAlign="center">
      <Container maxW="container.xl">
        <Text>&copy; 2024 Task Manager</Text>
      </Container>
    </Box>
  );
};

export default Footer;
