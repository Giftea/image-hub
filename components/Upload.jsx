import React, { useState } from "react";
import { Stack, Box, Button, Image, Input } from "@chakra-ui/react";

export default function Upload({ userId, onClose }) {
  const [img, setImg] = useState();

  function handleOnChange(changeEvent) {
    // HANDLE INPUT CHANGE FUNCTION GOES HERE
  }

  async function handleOnSubmit(event) {
    // CREATE IMAGE FUNCTION GOES HERE
  }

  return (
    <Stack px={6} py={20}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        py={10}
        px={{ base: 6, md: 20 }}
        bg="#7352b410"
        borderRadius="20px"
      >
        <Box width={{ base: "100%", lg: 500 }} mr={{ base: 0, lg: 6 }}>
          <Image
            alt=""
            width={"100%"}
            height={500}
            objectFit={"cover"}
            src={img}
          />
        </Box>
        <form method="post" onSubmit={handleOnSubmit}>
          <Stack mt={4} height={{ base: "100%", lg: "70%" }}>
            <Input type="file" name="file" onChange={handleOnChange} />
            <Button colorScheme={"purple"} type="submit" disabled={!img} mt={2}>
              Publish
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}
