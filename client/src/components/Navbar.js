import {
    useDisclosure,
    useColorMode,
    Button,
    Flex,
    Box,
    IconButton,
    useColorModeValue,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    Link as ChakraLink
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import { navBgColor } from '../styles/darkMode';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

const LINKS = [
    {
        href: '/',
        text: 'home'
    },
    {
        href: '/events',
        text: 'eveNFTs'
    },
    {
        href: '/user',
        text: 'dashboard'
    }
];

const NavContainer = styled(Flex)`
position: sticky;
z-index: 100;
top: 0;
backdrop-filter: saturate(180%) blur(20px);
transition: background-color 0.1 ease-in-out;
`;

const Navbar = () => {
const { colorMode, toggleColorMode } = useColorMode();
const bg = useColorModeValue(navBgColor.light, navBgColor.dark);
const isBigScreen = useMediaQuery({ minWidth: 600 });
const { isOpen, onOpen, onClose } = useDisclosure();

const getLink = ({ href, text }) => (
    <ChakraLink href={href} style={{ textDecoration: 'none' }}>
        <Button as="a" variant="ghost" p={[6, 4]} fontSize={['xl', 'lg']}>
            {text}
        </Button>
    </ChakraLink>
);

return (
    <NavContainer
        borderRadius='2xl'
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1000px"
        width="100%"
        bg={bg}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
        >

        {isBigScreen && (
            <IconButton
                borderRadius='10px'
                aria-label="toggle dark mode"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
            />
        )}

        {isBigScreen ? (
                <Box>{LINKS.map(getLink)}</Box> 
            ) : (
                <IconButton
                    borderRadius='10px'
                    aria-label="toggle ham"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                />                    
            )}

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex
                            direction="column"
                            justifyContent="center"
                            height="100%"
                            alignItems="center"
                        >
                            <IconButton
                                borderRadius='10px'
                                boxSize="50px"
                                mb="6"
                                aria-label="toggle dark mode"
                                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                                onClick={toggleColorMode}
                            />
                            {LINKS.map(getLink)}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </NavContainer>
);
};

export default Navbar;
