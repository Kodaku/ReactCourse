import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        icon: 'sun'
    },
    winter:{
        text: 'Burr, it is cold',
        icon: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

export default class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const season = getSeason(this.props.lat, new Date().getMonth());
        const {text, icon} = seasonConfig[season];
        return (
            <div className={`season-display ${season}`}>
                <i className={`${icon} icon massive icon-left`} />
                <h1>{text}</h1>
                <i className={`${icon} icon massive icon-right`}/>
            </div>
        );
    }
}