// src/components/TaskCard.js
import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const TaskCard = ({ task, onDelete }) => {
  const router = useRouter();

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} w="full">
      <VStack spacing={4} align="start">
        <Text fontSize="xl" fontWeight="bold">{task.title}</Text>
        <Text>{task.description}</Text>
        <Button colorScheme="teal" onClick={() => router.push(`/tasks/${task._id}`)}>View Details</Button>
        <Button colorScheme="red" onClick={onDelete}>Delete</Button>
      </VStack>
    </Box>
  );
};

export default TaskCard;
