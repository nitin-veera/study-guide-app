import { Outlet } from "react-router-dom"
import ProtectedNavbar from './ProtectedNavbar'
import { Flex, Box } from "@chakra-ui/react"

// redirect to LOGIN if not authenticated

export default function ProtectedLayout() {

    return (
        <>
            <ProtectedNavbar />
            <Flex as="main" pt="6" pb="12" mx="auto" w="full" maxW="1200px">
                <Box width="100%">
                    <Outlet />
                </Box>
            </Flex>
        </>);
}