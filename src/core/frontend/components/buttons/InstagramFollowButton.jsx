import {FaInstagram} from "react-icons/fa";
import React from "react";

const InstagramFollowButton = ({handleFollow}) => {
    return (
        <button
            onClick={handleFollow}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex items-center mt-4 w-full justify-center"
        >
            <FaInstagram className="mr-2" />
            Follow
        </button>
    );
};

export default InstagramFollowButton;