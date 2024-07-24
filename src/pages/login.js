// login.js
import React, { useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { login } from '../utils/api'; // Asegúrate de que la ruta sea correcta

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });

      // Manejo de login exitoso
      console.log('Login successful:', data);
      // Guardar el token en localStorage
      localStorage.setItem('token', data.token);
      // Redirigir a la página de tareas
      router.push('/tasks/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
}
