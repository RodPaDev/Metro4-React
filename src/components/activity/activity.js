import React from "react";
import Ring from "./ring.js";
import Metro from "./metro.js";
import Square from "./square.js";
import Cycle from "./cycle.js";
import Simple from "./simple.js";

import "./activity.less";

export default class Activity extends React.Component {
    render() {
        let activityType;
        let activityClassName;

        const {type, variant, size, radius, cls} = this.props;

        switch (type) {
            case 'metro': activityType = <Metro/>; break;
            case 'square': activityType = <Square/>; break;
            case 'cycle': activityType = <Cycle/>; break;
            case 'simple': activityType = <Simple size={size} radius={radius}/>; break;
            default: activityType = <Ring/>;
        }

        activityClassName = `activity-${type} ${variant}-style ${cls}`;

        return (
            <div className={activityClassName}>
                {activityType}
            </div>
        )
    }
}

Activity.defaultProps = {
    type: 'ring',
    variant: 'light',
    size: 64,
    radius: 20,
    cls: ""
};