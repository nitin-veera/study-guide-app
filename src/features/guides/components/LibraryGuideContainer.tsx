import LibraryGuideCard from './LibraryGuideCard';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function BigGuidesContainer() {

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Your Guides</Tab>
                    <Tab>Saved Guides</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <LibraryGuideCard></LibraryGuideCard>
                        <LibraryGuideCard></LibraryGuideCard>
                        <LibraryGuideCard></LibraryGuideCard>
                    </TabPanel>
                    <TabPanel>
                        <LibraryGuideCard></LibraryGuideCard>
                        <LibraryGuideCard></LibraryGuideCard>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}