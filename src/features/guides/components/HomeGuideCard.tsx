import {
    Avatar,
    Card,
    CardHeader,
    CardFooter,
    Heading,
    HStack,
    Text,
} from "@chakra-ui/react";

export default function HomeGuideCard() {

    return (
        <div>
            <Card >
                <CardHeader>
                    <Text mb={2} fontWeight="bold" fontSize="xl">Name of study guide</Text>
                    <Heading size='xs'>Number of Questions</Heading>
                </CardHeader>
                <CardFooter>
                    <HStack height='20px'>
                        <Avatar
                            size={'xs'}
                            src={''}
                        />
                        <Text fontSize="sm">Username</Text>
                    </HStack>
                </CardFooter>
            </Card>
        </div>
    );
}