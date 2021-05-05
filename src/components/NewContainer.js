import React from "react";
import NewsList from "./NewsList";
import {withNewsConsumer} from "../Context2";
import Loading from "./Loading";

function NewContainer ({context}) 
{
    const {loading,sortedRooms,rooms} = context;
    if (loading){ 
        return <Loading />;
    }
    return (
      <>
            
            <NewsList rooms={sortedRooms} />
      </>
    );
}
export default withNewsConsumer(NewContainer);

