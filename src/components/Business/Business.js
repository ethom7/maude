import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <h2>ip address: {this.props.business.ip}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>country: {this.props.business.country_name}</p>
                        <p>region: {this.props.business.region_name}</p>
                        <p>city: {`${this.props.business.city}`}</p>
                        <p>zip code: {`${this.props.business.zip_code}`}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>time zone: {this.props.business.time_zone}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;