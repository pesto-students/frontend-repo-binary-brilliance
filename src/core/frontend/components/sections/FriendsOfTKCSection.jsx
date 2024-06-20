import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import React from "react";
import {EVENTS} from "@/core/common/constants";
import CauseCard from "@/core/frontend/components/cards/CauseCard";
import FriendOfTKCCard from "@/core/frontend/components/cards/FriendOfTKCCard";
import publicImages from "@/core/frontend/publicImages";

const FriendsOfTKCSection = () => {
    const friendsOfTKC = [
        {
            id: 1,
            title: 'Raunak Burrows',
            subtitle: 'Software Engineer',
        },
        {
            id: 2,
            title: 'Kanika Kala',
            subtitle: 'Software Engineer',
        },
        {
            id: 3,
            title: 'Mustafa Bohra',
            subtitle: 'UI/UX Designer',
        }
    ]
    return (
        <Section isCream={true} layout='vertical' horizontalPositionOfChildren='center'>
            <Heading labelConfig={{blue: `Friends of`, black: `TKC`, isBlueFirst: true}}/>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-center">
                {friendsOfTKC.map((friend, index) => {
                    return <FriendOfTKCCard key={index} title={friend.title} subtitle={friend.subtitle} icon={publicImages.WORK_AROUNDS.FRIEND_OF_TKC} />
                })}
            </div>
        </Section>
    );
};

export default FriendsOfTKCSection;