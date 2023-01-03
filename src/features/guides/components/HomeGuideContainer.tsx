import HomeGuideCard from './HomeGuideCard'

import {
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react'

export default function SmallGuidesContainer() {

    return (
        <div>
            <Text fontSize="xl" mb="3">Recents</Text>
            <Grid mb="5" templateColumns='repeat(3, 1fr)' gap={3}>
                <GridItem>
                    <HomeGuideCard></HomeGuideCard>
                </GridItem>
                <GridItem>
                    <HomeGuideCard></HomeGuideCard>
                </GridItem>
                <GridItem>
                    <HomeGuideCard></HomeGuideCard>
                </GridItem>
            </Grid>

            <Text fontSize="xl" mb="3">See what other people are studying</Text>
            <Grid mb="5" templateColumns='repeat(3, 1fr)' gap={3}>
                <GridItem>
                    <HomeGuideCard></HomeGuideCard>
                </GridItem>
                <GridItem>
                    <HomeGuideCard></HomeGuideCard>
                </GridItem>
                <GridItem>
                    <HomeGuideCard></HomeGuideCard>
                </GridItem>
                <GridItem>
                    <HomeGuideCard></HomeGuideCard>
                </GridItem>
            </Grid>
        </div>
    )
}