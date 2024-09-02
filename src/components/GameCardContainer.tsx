import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      _hover={{
        transform: "scale(.98)",
      }}
      transition= {"transform .18s ease"}
      width={"100%"}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
