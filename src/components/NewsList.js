import React from 'react'
import News from './new'

export default function NewstAList({rooms}) {
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
                    return <News key={item.id} news={item} />
                })}
            </div>
        </section>
    );
}
