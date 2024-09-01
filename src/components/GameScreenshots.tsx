import { SimpleGrid, Image, useDisclosure, Skeleton } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import ScreenshotModal from "./ScreenshotModal";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useState } from "react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const skeletons = [1, 2, 3, 4];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    onOpen();
  };  

  if (error) throw error;

  return (
    <>
    <SimpleGrid columns={{ base: 1, md: 2 }} marginY={5} gap="3">
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
      ))}
      {screenshots?.results.map((img) => (
        <Image key={img.id} src={img.image} onClick={() => handleImageClick(img.image)} cursor="pointer"/>
      ))}
    </SimpleGrid>
     {selectedImage && (
      <ScreenshotModal isOpen={isOpen} onClose={onClose} image={selectedImage} />
    )}
    </>
  );
};

export default GameScreenshots;
