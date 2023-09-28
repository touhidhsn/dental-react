import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);

  return (
    <Flex py={24} bg={useColorModeValue("white", "gray.800")}>
      <Container
        maxW={"4xl"}
        bg={useColorModeValue("blue.50", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        // direction={"column"}
      >
        <HStack justify={"space-evenly"}>
          <Stack>
            <Heading as={"h2"} fontSize={{ base: "xl", sm: "2xl" }} mb={1}>
              Subscribe to our Newsletter
            </Heading>
            <Text mt={1} color={error ? "red.500" : "gray.500"}>
              {error
                ? "Oh no an error occured! 😢 Please try again later."
                : "You won't receive any spam! ✌️"}
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              setError(false);
              setState("submitting");

              // remove this code and implement your submit logic right here
              // setTimeout(() => {
              //   if (email === "fail@example.com") {
              //     setError(true);
              //     setState("initial");
              //     return;
              //   }

              //   setState("success");
              // }, 1000);
            }}>
            <FormControl>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"email"}
                type={"email"}
                required
                placeholder={"Your Email"}
                aria-label={"Your Email"}
                value={email}
                disabled={state !== "initial"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                colorScheme={state === "success" ? "green" : "blue"}
                isLoading={state === "submitting"}
                w='100%'
                type={state === "success" ? "button" : "submit"}>
                {state === "success" ? <CheckIcon /> : "Submit"}
              </Button>
            </FormControl>
          </Stack>
        </HStack>
      </Container>
    </Flex>
  );
}
