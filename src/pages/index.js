import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Center, Image, Flex, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.xl" p={2} mb={100}>
      <Center mb={8} mt={10}>
        <Heading as="h1" size="2xl">
          Welcome to Task Manager
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
        <Flex align="center">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">Task Manager Overview</Heading>
            <Text>
              This application helps you manage your tasks efficiently and effectively.
              Keep track of your progress, set deadlines, and stay organized.
            </Text>
          </VStack>
        </Flex>
        <Image src="https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwhat-is-ethereum.b37ce60e.png&w=1504&q=75" alt="Overview Image" />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
        <Box p={5} shadow="md" borderWidth="1px" textAlign="center" _hover={{ bg: "purple.100" }}>
          <Image boxSize='300px' src="https://png.pngtree.com/recommend-works/png-clipart/20240716/ourmid/pngtree-efficient-task-management-the-checklist-approach-png-image_13090979.png" alt="Task 1 Image" mb={4} mx="auto" />
          <Heading fontSize="xl">Planning</Heading>
          <Text mt={4}>Helps you planning ahead of time</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" textAlign="center" _hover={{ bg: "purple.100" }}>
          <Image boxSize='300px' src="https://ouch-cdn2.icons8.com/UNKE0YVOdrHQCqsCu-nRglKkdWFbKAh3tr47Mdydlbc/rs:fit:622:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjg3/LzA4OTMwMGE2LTY0/NTktNDhmZS1hZjRl/LWNkNjFiMzhmOWJh/MS5zdmc.png" alt="Task 2 Image" mb={4} mx="auto" />
          <Heading fontSize="xl">Simple Interface</Heading>
          <Text mt={4}>Simple interface for easier managment</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" textAlign="center" _hover={{ bg: "purple.100" }}>
          <Image boxSize='300px' src="https://cdn-icons-png.freepik.com/512/10074/10074041.png" alt="Task 3 Image" mb={4} mx="auto" />
          <Heading fontSize="xl">Free to use</Heading>
          <Text mt={4}>This site is free!</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" textAlign="center" _hover={{ bg: "purple.100" }}>
          <Image boxSize='300px' src="https://static-00.iconduck.com/assets.00/time-clock-icon-2048x2048-epigcltf.png" alt="Task 4 Image" mb={4} mx="auto" />
          <Heading fontSize="xl">Available all time</Heading>
          <Text mt={4}>Use it anytime you want</Text>
        </Box>
      </SimpleGrid>
      <Box 
        bgGradient="linear(to-r, purple.400, teal.400)" 
        color="white" 
        p={8} 
        borderRadius="lg" 
        textAlign="center" 
        mt={8}
      >
        <Heading as="h2" size="lg">Join Our Community</Heading>
        <Text mt={4}>
          Join our community of task managers and stay updated with the latest features, tips, and best practices. 
          Connect with other users, share your experiences, and get support from the community.
        </Text>
        <Image src="https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Feth.28aff33d.png&w=640&q=75" alt="Community Image" mt={4} mx="auto" />
      </Box>
    </Container>
  );
}
