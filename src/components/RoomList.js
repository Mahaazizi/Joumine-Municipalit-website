import React from 'react'
import New from './new'
export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>unfortunately no achievements matched your search 
                    parametre
                </h3>
            </div>
        );
    }
    return (
        <section className="Achievementslist">
            <div className="Achievementslist-center">
                {rooms.map(item => {
                    return <New key={item.id} news={item} />
                })}
            </div>
        </section>
    );
}
