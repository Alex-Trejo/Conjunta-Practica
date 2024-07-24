// src/pages/tasks/new.js
import React, { useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createTask } from '../../utils/api';

export default function NewTask() {
  const router = useRouter();
  const [task, setTask] = useState({ title: '', description: '' });

  const handleCreate = async () => {
    try {
      await createTask(task);
      router.push('/tasks');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <Input
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <Button colorScheme="teal" onClick={handleCreate}>Create Task</Button>
      </VStack>
    </Box>
  );
}
