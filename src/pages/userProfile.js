import React, { useEffect, useState } from 'react';
import { Box, Button, Input, VStack, Text, HStack, Image } from '@chakra-ui/react';
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
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        w={{ base: "90%", md: "60%", lg: "50%" }}
        borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
        display="flex"
      >
        <Box
          w="50%"
          bgGradient="linear(to-r, purple.400, teal.400)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          p={8}
        >
          <Text fontSize="3xl" fontWeight="bold">~(ºvº)~</Text>
        </Box>
        <VStack
          w="50%"
          p={8}
          spacing={4}
          alignItems="flex-start"
        >
          <Text fontSize="2xl" fontWeight="bold">Perfil de Usuario</Text>
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
          <Button colorScheme="teal" w="100%" onClick={handleUpdate}>Actualizar Perfil</Button>
        </VStack>
      </Box>
    </Box>
  );
}
