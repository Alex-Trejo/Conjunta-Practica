import React, { useState } from 'react';
import { Box, Button, Input, VStack, FormControl, FormLabel, Heading, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createTask } from '../../utils/api';

export default function NewTask() {
  const router = useRouter();
  const [task, setTask] = useState({ title: '', description: '' });
  const toast = useToast();

  const handleCreate = async () => {
    if (!task.title || !task.description) {
      toast({
        title: 'Missing fields',
        description: 'Please fill out both the title and description fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      await createTask(task);
      toast({
        title: 'Task Created',
        description: 'Your task has been created successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/tasks');
    } catch (error) {
      console.error('Error creating task:', error);
      toast({
        title: 'Creation Failed',
        description: 'There was an error creating the task.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={6}
      maxW="md"
      mx="auto"
      mt={8}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      borderWidth={1}
      borderColor="gray.200"
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Create New Task
      </Heading>
      <VStack spacing={4}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Enter task title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Enter task description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleCreate} w="full">
          Create Task
        </Button>
      </VStack>
    </Box>
  );
}
