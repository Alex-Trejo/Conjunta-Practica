import React, { useEffect, useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { fetchTaskById, updateTask, deleteTask } from '../../utils/api';

export default function TaskDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (id) {
      async function getTask() {
        const data = await fetchTaskById(id);
        setTask(data);
      }
      getTask();
    }
  }, [id]);

  const handleUpdate = async () => {
    await updateTask(id, task);
    router.push('/tasks');
  };

  const handleDelete = async () => {
    await deleteTask(id);
    router.push('/tasks');
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
        <Button colorScheme="teal" onClick={handleUpdate}>Update Task</Button>
        <Button colorScheme="red" onClick={handleDelete}>Delete Task</Button>
      </VStack>
    </Box>
  );
}
