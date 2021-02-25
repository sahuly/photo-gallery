import React, { Component } from 'react';
import './PhotoViewer.css';

class PhotoViewer extends Component {

    render () {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
        if (!src) {
          return null;
        }
        return (
          <div>
            <div className="modal-overlay" onClick={closeModal}></div>
            <div isOpen={!!src} className="modal"> 
              <div className="modal-body">
                <i className="modal-close" onClick={closeModal}>X</i>
                {hasPrev && <i className='modal-prev' onClick={findPrev}>&lsaquo;</i>}
                {hasNext && <i className='modal-next' onClick={findNext}>&rsaquo;</i>}
                <img src={src} alt="" width="800" height="550"/>
              </div>
            </div>
          </div>
        )
      }
}

export default PhotoViewer;