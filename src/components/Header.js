import React, { useEffect, useState } from 'react';
import { Box, Container, Link, HStack, Button, Image, Menu, MenuButton, MenuList, MenuItem, IconButton, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/login');
    toast({
      title: 'Sesión cerrada',
      description: 'Has cerrado sesión correctamente.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleProfileClick = () => {
    if (isAuthenticated) {
      router.push('/userProfile');
    } else {
      toast({
        title: 'Acceso denegado',
        description: 'Por favor, inicia sesión para ver el perfil.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="teal.500" py={4} color="white">
      <Container maxW="container.xl">
        <HStack spacing={4} justify="space-between">
          <HStack spacing={2} alignItems="center">
            <Image boxSize="60px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1396px-Ethereum_logo_translucent.svg.png" />
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
                <Link href="/login" fontWeight="bold">Iniciar sesión</Link>
                <Link href="/register" fontWeight="bold">Registrarse</Link>
              </>
            )}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
