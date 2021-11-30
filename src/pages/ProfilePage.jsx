import React from 'react'
import { PostsSection } from '../components/profile/PostsSection'
import { ProfileSection } from '../components/profile/ProfileSection'
import { Navbar } from '../components/ui/Navbar'

export const Profile = () => {
    return (
        <Navbar>
            <ProfileSection/>
            <PostsSection/>
        </Navbar>
    )
}
