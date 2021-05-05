import React from "react";

import DataList from "./DataList";
import {withdataConsumer} from "../Contextstatic";
import Loading from "./Loading";

function DataContainer ({context}) 
{
    const {loading,sortedRooms,rooms} = context;
    if (loading){ 
        return <Loading />;
    }
    return (
      <>
            
            <DataList rooms={sortedRooms} />
      </>
    );
}
export default withdataConsumer(DataContainer);
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
