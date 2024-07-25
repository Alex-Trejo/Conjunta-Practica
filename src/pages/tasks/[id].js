import React, { useEffect, useState } from 'react';
import { Box, Button, Input, VStack, FormControl, FormLabel, Heading, useToast, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { fetchTaskById, updateTask, deleteTask } from '../../utils/api';

export default function TaskDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState({ title: '', description: '' });
  const toast = useToast();

  useEffect(() => {
    if (id) {
      async function getTask() {
        try {
          const data = await fetchTaskById(id);
          setTask(data);
        } catch (error) {
          console.error('Error fetching task:', error);
          toast({
            title: 'Fetch Error',
            description: 'Unable to fetch task details.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      }
      getTask();
    }
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updateTask(id, task);
      toast({
        title: 'Task Updated',
        description: 'The task has been updated successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/tasks');
    } catch (error) {
      console.error('Error updating task:', error);
      toast({
        title: 'Update Failed',
        description: 'There was an error updating the task.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      toast({
        title: 'Task Deleted',
        description: 'The task has been deleted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/tasks');
    } catch (error) {
      console.error('Error deleting task:', error);
      toast({
        title: 'Delete Failed',
        description: 'There was an error deleting the task.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={6}
      maxW="lg"
      mx="auto"
      mt={8}
      bg="gray.50"
      borderRadius="lg"
      boxShadow="lg"
      borderWidth={1}
      borderColor="gray.300"
      overflow="hidden"
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center" color="teal.600">
        Task Details
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="title" isRequired>
          <FormLabel fontWeight="bold">Title</FormLabel>
          <Input
            placeholder="Enter task title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            borderColor="teal.400"
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel fontWeight="bold">Description</FormLabel>
          <Input
            placeholder="Enter task description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            borderColor="teal.400"
          />
        </FormControl>
        <Divider my={6} borderColor="gray.300" />
        <Button colorScheme="teal" onClick={handleUpdate} size="lg">
          Update Task
        </Button>
        <Button colorScheme="red" onClick={handleDelete} size="lg" mt={4}>
          Delete Task
        </Button>
      </VStack>
    </Box>
  );
}
