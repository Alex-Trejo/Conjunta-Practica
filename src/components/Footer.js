import React from 'react';
import { Box, Container, Text, HStack, Link, Icon, Image } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="teal.500" p={4} color="white" textAlign="center">
      <Container maxW="container.xl">
        <Text mb={2}>&copy; 2024 Task Manager</Text>
        <HStack spacing={4} justify="center">
          <Link href="https://www.twitter.com" isExternal>
            <Image src="https://cdn-icons-png.flaticon.com/512/733/733635.png" w={6} h={6} />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <Image src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" w={6} h={6} />
          </Link>
          <Link href="https://www.linkedin.com" isExternal>
            <Image src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" w={6} h={6} />
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
