import React, { useState } from 'react';
import { Box, Button, Input, VStack, FormControl, FormLabel, Heading, Text, Checkbox, Link, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { login } from '../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });

      console.log('Login successful:', data);
      localStorage.setItem('token', data.token);
      router.push('/tasks/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        maxW="1000"
        w="full"
        bg="white"
        boxShadow="2xl"
        rounded="lg"
        p={8}
        display={{ md: 'flex' }}
      >
        <Box flex={1} bgGradient="linear(to-r, purple.500, teal.400)" rounded="lg" p={8} color="white">
          <Heading as="h2" size="xl" mb={4}>
            Welcome Back!
          </Heading>
        </Box>
        <Box flex={1} p={8}>
          <Heading as="h2" size="lg" mb={4}>
            Login
          </Heading>
          <Text mb={6}>Welcome back! Please login to your account.</Text>
          <form onSubmit={handleLogin}>
            <VStack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>User Name</FormLabel>
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

              <Button type="submit" colorScheme="teal" w="full" mt={4}>
                Login
              </Button>

            </VStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
