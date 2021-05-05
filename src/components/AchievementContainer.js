import React from "react";

import AchievementsList from "./AchievementsList";
import {withAchievementsConsumer} from "../Context";
import Loading from "./Loading";

function AchievementContainer ({context}) 
{
    const {loading,sortedRooms,rooms} = context;
    if (loading){ 
        return <Loading />;
    }
    return (
      <>
            
            <AchievementsList rooms={sortedRooms} />
      </>
    );
}
export default withAchievementsConsumer(AchievementContainer);
/*
export default function RoomContainer() {
      return (
        <RoomConsumer>
        {value => {
            const {loading,sortedRooms,rooms} = value;
            if (loading){ 
                return <loading />;
            }
            return (
                <div>
                    hello from rooms Container
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms} />
                </div>
            );
        }}
    </RoomConsumer>
    );
  
}*/
