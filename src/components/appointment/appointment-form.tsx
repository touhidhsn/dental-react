import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";

export const AppointmentForm = () => {
  return (
    <Container my={10} maxW={"4xl"}>
      <form>
        <Flex as={SimpleGrid} mt={4} columns={{ base: 2, md: 1 }}>
          <FormControl isRequired mr={4}>
            <FormLabel>First Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input />
          </FormControl>
        </Flex>
        <Flex as={SimpleGrid} mt={4} columns={{ base: 2, md: 1 }}>
          <FormControl isRequired mr={4}>
            <FormLabel>Contact Number</FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input />
          </FormControl>
        </Flex>
        <Flex as={SimpleGrid} mt={4} columns={{ base: 2, md: 1 }}>
          <FormControl mr={4}>
            <FormLabel>Address</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Date of birth</FormLabel>
            <Input type='date' />
          </FormControl>
        </Flex>

        <FormControl as='fieldset' my={4}>
          <HStack>
            <FormLabel as='legend' mr={12}>
              Select Patient's Gender
            </FormLabel>
            <RadioGroup defaultValue='gender'>
              <HStack spacing='24px'>
                <Radio value='male'>Male</Radio>
                <Radio value='female'>Female</Radio>
              </HStack>
            </RadioGroup>
          </HStack>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Select a service you want </FormLabel>
          <Select placeholder='Select Service'>
            <option>Fillings</option>
            <option>Root canals</option>
            <option>Implants</option>
          </Select>
        </FormControl>
        <Flex as={SimpleGrid} mt={4} columns={{ base: 2, md: 1 }}>
          <FormControl mr={4}>
            <FormLabel>Expected Date</FormLabel>
            <Input type='date' />
          </FormControl>
          <FormControl>
            <FormLabel>Expected Time</FormLabel>
            <Input type='time' />
          </FormControl>
        </Flex>
        <FormControl mt={4} isRequired>
          <FormLabel>
            Send 500tk bkash to 01717787275 this number and write that mobile
            number here
          </FormLabel>
          <Input />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Additional notes to doctor</FormLabel>
          <Input />
        </FormControl>
        <Button
          rounded={"sm"}
          mt={4}
          size={"md"}
          fontWeight={"normal"}
          px={6}
          colorScheme={"blue"}
          bg={"blue.500"}
          _hover={{ bg: "blue.600" }}>
          Request for an appointment
        </Button>
      </form>
    </Container>
  );
};
