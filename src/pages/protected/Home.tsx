import { HomeGuideContainer } from '../../features/guides';

import {
    Flex,
    Text,
} from '@chakra-ui/react'

export default function Home() {

    return (
        <div>
            <Flex mb="4">
                <Text fontSize="3xl" as="b">Welcome User!</Text>
            </Flex>
            <HomeGuideContainer></HomeGuideContainer>
        </div>
    );
}