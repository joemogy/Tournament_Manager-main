import React from "react";

export const Authenticated = (props) => {
    return (
        <div>
            <div>
                <span>User Email</span>:<span>{props.user.email}</span>
            </div>
            <div>
                <span>UID</span>:<span>{props.user.uid}</span>
            </div>
        </div>
    );
};