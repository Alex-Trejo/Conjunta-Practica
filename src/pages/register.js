import { useState } from 'react';
import { Input, Button, FormControl, FormLabel, FormErrorMessage, Box } from '@chakra-ui/react';

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
    <Box p={4} maxW="md" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired isInvalid={!!error}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired mt={4} isInvalid={!!error}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
        {success && <Box color="green.500" mt={4}>{success}</Box>}
        <Button type="submit" colorScheme="teal" mt={4}>
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
