import {
    Flex,
    Avatar,
    Box,
    Text,
} from '@chakra-ui/react'

export default function ProfileCard() {

    return (
        <div>
            <Box>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar size='lg' name='' src='' />
                        <Box>
                            <Text fontSize='2xl' as='b'>Username</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </div>
    )
}