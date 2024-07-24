// src/pages/userProfile.js
import React, { useEffect, useState } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { getProfile, updateProfile } from '../utils/api';

export default function UserProfile() {
  const [user, setUser] = useState({ email: '', nombre: '', telefono: '', edad: '' });

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    fetchUser();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateProfile(user);
      alert('Perfil actualizado con éxito');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">Perfil de Usuario</Text>
        <Input
          placeholder="Email"
          value={user.email}
          isReadOnly
        />
        <Input
          placeholder="Nombre"
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <Input
          placeholder="Teléfono"
          value={user.telefono}
          onChange={(e) => setUser({ ...user, telefono: e.target.value })}
        />
        <Input
          placeholder="Edad"
          value={user.edad}
          onChange={(e) => setUser({ ...user, edad: e.target.value })}
        />
        <Button colorScheme="teal" onClick={handleUpdate}>Actualizar Perfil</Button>
      </VStack>
    </Box>
  );
}
