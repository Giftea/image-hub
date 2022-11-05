import React, { useState } from "react";
import { Text, Stack, Button, Box, Input } from "@chakra-ui/react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async () => {
    // LOGIN FUNCTION GOES HERE
  };

  return (
    <Box className="auth-container">
      <form onSubmit={handleOnSubmit}>
        <Stack bg="#fff" py={8} px={6} width="400px">
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            Login
          </Text>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            type="email"
          />{" "}
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="password"
          />
          <Button variant={"solid"} colorScheme="purple" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
