import React from 'react';
import './PhotoGallery.css';

const photoGallery = (props) => {
    const{ data, callBack } = props;
    return (
        data.map((data,index) => (
            <div className="ThumbnailPhoto" onClick={callBack}>
                <img src={data.thumbnailURL} key={index} alt="" width={data.width} height={data.height} />
                <div className="ThumbnailPhotoCaption">{data.name}</div>
            </div>
        ))
    );
}

export default photoGallery;