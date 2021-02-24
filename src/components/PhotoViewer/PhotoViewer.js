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
              <div className='modal-body'>
                <a href="#" className="modal-close" onClick={closeModal} onKeyDown={this.handleKeyDown}>X</a>
                {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                <img src={src}/>
              </div>
            </div>
          </div>
        )
      }
}

export default PhotoViewer;