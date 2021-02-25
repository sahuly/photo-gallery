import React from 'react';
import './PhotoGallery.css';

const photoGallery = (props) => {
    const{ data, callBack } = props;
    return (
        data.map((data,index) => (
            <div key={data.id} className="ThumbnailPhoto" onClick={()=>callBack(index)}>
                <img src={data.thumbnailURL} alt="" width={data.width} height={data.height} />
                <div className="ThumbnailPhotoCaption">{data.name}</div>
            </div>
        ))
    );
}

export default photoGallery;