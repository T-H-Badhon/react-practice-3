import React from 'react';

const ShowData = (props) => {
    const {name,email,phone}=props.profile;
    console.log(props.profile)
    return (
        <div>
            <h3>{name}</h3>
            <h4>{phone}</h4>
            <h5>{email}</h5>
        </div>
    );
};

export default ShowData;