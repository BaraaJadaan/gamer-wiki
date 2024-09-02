import { Button, Text, Box, Flex } from "@chakra-ui/react";

interface ResetProps {
    onClick: () => void;
  }
  
  const ResetQuery: React.FC<ResetProps> = ({ onClick }) => {
    return (
        <Flex justifyContent={"end"} mr={5}>
            <Button position={"absolute"} onClick={onClick}>
                <Text>Reset Search</Text>
            </Button>
        </Flex>
    );
  };
export default ResetQuery;