import React from 'react';


function  IMG ({

    image,


}) {


    if (image === "none" || image === undefined || image === "") {
        return null;
        
    }else{

        return (
    
            <img src={image} />
        );

    }
};

export default  IMG