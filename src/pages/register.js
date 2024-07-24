import { useState } from 'react';
import { Input, Button, FormControl, FormLabel, FormErrorMessage, Box, VStack, Heading, Text, Flex } from '@chakra-ui/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('User registered successfully!');
        setEmail('');
        setPassword('');
      } else {
        setError(data.error || 'Registration failed.');
      }
    } catch (error) {
      setError('Request failed: ' + error.message);
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
            Join Us!
          </Heading>
        </Box>
        <Box flex={1} p={8}>
          <Heading as="h2" size="lg" mb={4}>
            Register
          </Heading>
          <Text mb={6}>Create an account to get started.</Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="email" isRequired isInvalid={!!error}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired isInvalid={!!error}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              {error && <FormErrorMessage>{error}</FormErrorMessage>}
              {success && <Box color="green.500">{success}</Box>}
              <Button type="submit" colorScheme="teal" w="full" mt={4}>
                Register
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;
