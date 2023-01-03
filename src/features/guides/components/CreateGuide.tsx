import {
    Box,
    Button,
    Flex,
    Input,
    Spacer,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    Textarea,
} from '@chakra-ui/react'

export default function CreateGuide() {

    return (
        <div>
            <form>

                <Flex pb={8}>
                    <Box>
                        <Text fontSize='2xl' as='b'>Create a new study guide</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Button colorScheme='blue'>Create</Button>
                    </Box>
                </Flex>


                <Input placeholder='Enter a title' size='lg' mb={4} />
                <Input placeholder='Enter the number of questions' type="number" size='lg' mb={6} />


                <Tabs size='md' variant='line'>
                    <TabList>
                        <Tab>Paste Your Notes</Tab>
                        <Tab>Upload File</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Textarea placeholder='Paste your notes here!' height='375px' />
                        </TabPanel>
                        <TabPanel>
                            <p>Upload File (pdf, docx, txt) </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                <Flex>
                    <Spacer />
                    <Box>
                        <Button colorScheme='blue' size='lg'>Create</Button>
                    </Box>
                </Flex>

            </form>
        </div>

    );
}