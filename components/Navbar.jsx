import { Stack, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ isAuthenticated }) => {
  const router = useRouter();
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems={"center"}
      px={{ base: 6, md: 20 }}
      py={6}
      position="sticky"
      top={0}
      zIndex={1000}
      bg="#fff"
      boxShadow="md"
    >
      <Link href="/" className="text-2xl">
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Image-Hub
        </Text>
      </Link>

      <Stack justifyContent="flex-end" alignItems={"center"} direction={"row"}>
        {isAuthenticated ? (
          <Button
            variant={"solid"}
            colorScheme="purple"
            onClick={() => router.push("/upload")}
          >
            Upload
          </Button>
        ) : (
          <Button
            variant={"outline"}
            colorScheme="purple"
            onClick={() => router.push("/register")}
          >
            Join
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
