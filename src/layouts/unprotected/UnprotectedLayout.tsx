import { Outlet } from "react-router-dom"
import UnprotectedNavbar from './UnprotectedNavbar'
import { Flex, Box } from "@chakra-ui/react"

export default function UnprotectedLayout() {

    return (
        <>
            <UnprotectedNavbar />
            <Flex as="main" pt="6" pb="12" mx="auto" w="full" maxW="1200px">
                <Box width="100%">
                    <Outlet />
                </Box>
            </Flex>
        </>);
}