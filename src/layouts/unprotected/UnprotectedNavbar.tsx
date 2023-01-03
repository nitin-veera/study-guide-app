import { ROOT, LOGIN, REGISTER } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Flex,
    Link,
    IconButton,
    Button,
    HStack,
    useDisclosure,
    Text,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export default function LandingNavbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Link
                                as={RouterLink}
                                to={ROOT}
                                style={{ textDecoration: 'none' }}
                            >
                                <Text fontSize="lg">
                                    studyguide.ai
                                </Text>
                            </Link>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>

                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <Link
                                as={RouterLink}
                                to={LOGIN}
                                style={{ textDecoration: 'none' }}>
                                <Button>
                                    Log in
                                </Button>
                            </Link>
                            <Link
                                as={RouterLink}
                                to={REGISTER}
                                style={{ textDecoration: 'none' }}>
                                <Button colorScheme={"blue"}>
                                    Sign up
                                </Button>
                            </Link>

                        </Stack>
                    </Flex>
                </Flex>
            </Box >
        </>
    );
}