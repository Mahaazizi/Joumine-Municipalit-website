import React from 'react'
import Achievement from './Achievement'

export default function AchievementslistAList({rooms}) {
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
                    return <Achievement key={item.id} achievement={item} />
                })}
            </div>
        </section>
    );
}
