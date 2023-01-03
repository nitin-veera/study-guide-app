import {
    Avatar,
    Card,
    CardHeader,
    Heading,
    HStack,
    Divider,
    Text,
} from "@chakra-ui/react";

export default function LibraryGuideCard() {

    return (
        <div>
            <Card mb="3">
                <CardHeader>
                    <HStack height='20px'>
                        <Heading size='xs'>Number of Questions</Heading>
                        <Divider orientation='vertical'></Divider>
                        <Avatar
                            size={'xs'}
                            src={''}
                        />
                        <Text fontSize="sm">Username</Text>
                    </HStack>
                    <Text mt={2} fontWeight="bold" fontSize="xl">Name of study guide</Text>
                </CardHeader>
            </Card>
        </div>
    );
}