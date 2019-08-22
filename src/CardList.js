import React from 'react';
import {Card} from "./Card";
export function CardList (props) {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
    )
}
//[<Card />, <Card />, <Card />]
// [React.createElement(), React.createElement(), React.createElement()]