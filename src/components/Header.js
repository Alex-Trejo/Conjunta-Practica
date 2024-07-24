import React from 'react';
import { Box, Container, Link, HStack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/login');
  };

  const handleProfileClick = () => {
    if (isAuthenticated) {
      router.push('/userProfile');
    } else {
      alert('Por favor inicie sesión para ver el perfil');
    }
  };

  return (
    <Box bg="teal.500" py={4} color="white">
      <Container maxW="container.xl">
        <HStack spacing={4} justify="space-between">
          <HStack spacing={4}>
            <Link href="/" color="white" fontWeight="bold">Home</Link>
            <Link href="/tasks" color="white" fontWeight="bold">Tasks</Link>
          </HStack>
          <HStack spacing={4}>
            {isAuthenticated ? (
              <>
                <Button colorScheme="teal" onClick={handleProfileClick}>Perfil</Button>
                <Button colorScheme="teal" onClick={handleLogout}>Cerrar sesión</Button>
              </>
            ) : (
              <>
                <Link href="/login">Iniciar sesión</Link>
                <Link href="/register">Registrarse</Link>
              </>
            )}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
