import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Image,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  interface ScreenshotModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
  }
  
  function ScreenshotModal({ isOpen, onClose, image }: ScreenshotModalProps) {
    const isDisabled = useBreakpointValue({ base: true, md: false });
  
    if (isDisabled) return null;
  
    return (
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="full">
        <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.9)" />
        <ModalContent
          maxW="90vw"
          maxH="90vh"
          background="transparent"
          boxShadow="none"
          overflow="hidden"
        >
          <ModalBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={0}
            onClick={onClose}
            cursor="pointer"
          >
            <Image
              src={image}
              alt="Game Screenshot"
              maxH="90vh"
              maxW="90vw"
              objectFit="contain"
              borderRadius="md"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  
  export default ScreenshotModal;
  