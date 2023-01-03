import ProfileCard from '../../features/profile/ProfileCard'
import { LibraryGuideContainer } from '../../features/guides'
import { VStack, Divider } from '@chakra-ui/react'

export default function MyLibrary() {

    return (
        <div>
            <VStack spacing={4} align='stretch'>
                <ProfileCard></ProfileCard>
                <Divider></Divider>
                <LibraryGuideContainer></LibraryGuideContainer>
            </VStack>
        </div>
    )
}