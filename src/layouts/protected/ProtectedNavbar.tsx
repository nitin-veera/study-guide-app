import { HOME, LIBRARY, CREATE, SETTINGS, LOGIN } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
// import { useLogout } from "../../Hooks/auth";
import {
    Box,
    Flex,
    Avatar,
    Link,
    IconButton,
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Text,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';


export default function Nav() {

    // const { logout, isLoading } = useLogout();

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
                                to={HOME}
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
                            <Link
                                as={RouterLink}
                                to={HOME}
                                fontWeight="bold"
                                style={{ textDecoration: 'none' }}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}>
                                Home
                            </Link>
                            <Link
                                as={RouterLink}
                                to={LIBRARY}
                                fontWeight="bold"
                                style={{ textDecoration: 'none' }}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}>
                                Your Library
                            </Link>
                            <Link
                                as={RouterLink}
                                to={CREATE}
                                fontWeight="bold"
                                style={{ textDecoration: 'none' }}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                }}>
                                Create
                            </Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={''}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={''}
                                        />
                                    </Center>
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem
                                        as={RouterLink}
                                        to={SETTINGS}>
                                        Account Settings
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem
                                    // onClick={logout}
                                    // isLoading={isLoading}
                                    >
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box >
        </>
    );
}