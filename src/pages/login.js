import React, { useState } from 'react';
import { Box, Button, Input, VStack, FormControl, FormLabel, Heading, Text, Flex, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { login } from '../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });

      if (!data.token) {
        throw new Error('No token received');
      }

      console.log('Login successful:', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('shouldReload', 'true'); 

      router.push('/tasks/');


    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: 'Login Error',
        description: error.message || 'Unable to login. Please check your email and password.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bgGradient="linear(to-br, teal.200, purple.300)" bgSize="200% 200%" animation="gradient 15s ease infinite">
      <Box
        maxW="5xl" // Incrementa el ancho máximo
        w="full"
        bg="white"
        boxShadow="xl"
        rounded="lg"
        p={10} // Ajusta el padding interno
        display={{ md: 'flex' }}
        spacing={12} // Agrega espacio entre los elementos del contenedor
      >
        <Box flex={1} bgGradient="linear(to-r, purple.400, teal.300)" rounded="lg" p={10} color="white" display="flex" alignItems="center" justifyContent="center">
          <Heading as="h2" size="xl" textAlign="center">
            Welcome Back!
          </Heading>
        </Box>
        <Box flex={1} p={10}> {/* Ajusta el padding interno */}
          <Heading as="h2" size="lg" mb={6}>
            Login
          </Heading>
          <Text mb={8}>Welcome back! Please login to your account.</Text>
          <form onSubmit={handleLogin}>
            <VStack spacing={6}> {/* Ajusta el espaciado entre los campos */}
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Button type="submit" colorScheme="teal" w="full" mt={6}>
                Login
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </Flex>
  );
}
