import { Container, Box, VStack, HStack, Text, Heading, Image, IconButton, Link, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" mt={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTcyNDM0NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
          <Heading as="h1" size="xl" mt={4}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Hi, I'm John Doe, a passionate Full Stack Developer with experience in building web applications using modern technologies like React, Node.js, and more. I love to create efficient and scalable solutions that make a difference.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project One
              </Heading>
              <Text mt={2}>A brief description of Project One. It is a web application that does amazing things.</Text>
              <Button mt={2} colorScheme="teal" as={Link} href="https://github.com/johndoe/project-one" isExternal>
                View on GitHub
              </Button>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project Two
              </Heading>
              <Text mt={2}>A brief description of Project Two. It is a mobile app that solves many problems.</Text>
              <Button mt={2} colorScheme="teal" as={Link} href="https://github.com/johndoe/project-two" isExternal>
                View on GitHub
              </Button>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md" color="gray.700">
            Feel free to reach out to me on any of the platforms below:
          </Text>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton as={Link} href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" isExternal />
            <IconButton as={Link} href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isExternal />
            <IconButton as={Link} href="https://twitter.com/johndoe" aria-label="Twitter" icon={<FaTwitter />} size="lg" isExternal />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
