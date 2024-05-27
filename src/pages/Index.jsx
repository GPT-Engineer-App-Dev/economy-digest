import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="#004E7C" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="#F3F3F3" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Breaking News: Market Hits Record Highs</Heading>
        <Text fontSize="lg">Stay updated with the latest financial news and trends.</Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={10} align="stretch">
        <Box bg="white" p={6} shadow="md" borderWidth="1px">
          <Heading size="md" mb={2}>Article 1: The Future of Cryptocurrency</Heading>
          <Text>Cryptocurrency is changing the financial landscape. Learn more about its potential and risks.</Text>
        </Box>
        <Box bg="white" p={6} shadow="md" borderWidth="1px">
          <Heading size="md" mb={2}>Article 2: Global Market Trends</Heading>
          <Text>Discover the latest trends in global markets and what they mean for investors.</Text>
        </Box>
        <Box bg="white" p={6} shadow="md" borderWidth="1px">
          <Heading size="md" mb={2}>Article 3: Tech Innovations in Finance</Heading>
          <Text>Explore how technology is revolutionizing the financial industry.</Text>
        </Box>
      </VStack>

      {/* Footer */}
      <Box bg="#004E7C" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact Us: info@financialtimes.com</Text>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;