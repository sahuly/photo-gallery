import React from 'react';
import './Layout.css';

const layout = (props) => (
    <React.Fragment>
        <div className="header">
           <div className="header-right">
                <a href="#about">Namma Photo Gallery</a>
            </div>
        </div>
        <main className="Content">
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;