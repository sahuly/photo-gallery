import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoViewer from '../../components/PhotoViewer';
import PhotoGallery from '../../components/PhotoGallery';
import {getPhotoGalleryRequest} from './action';
import './PhotoGalleryBuilder.css'

class PhotoGalleryBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        const { getPhotoGalleryRequest } = this.props;
        getPhotoGalleryRequest();
    }

    openModal(index) {
        this.setState ({ currentIndex: index });
    }

    closeModal(e) {
        this.setState ({ currentIndex: null });
    }

    findPrev(e) {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex -1
        }));
    }

    findNext(e) {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }

    render () {
        const { loading, photoGallery } = this.props;
        return (
            <React.Fragment>
                { loading && <div> loading... </div> }
                { !loading &&
                    <div className="PhotoGalleryContainer">
                        <div className="PhotoGalleryGrid">
                            <PhotoGallery data={photoGallery} 
                                          callBack={(index) => this.openModal(index)}/>
                        </div>
                        <PhotoViewer
                            closeModal={this.closeModal}
                            findPrev={this.findPrev}
                            findNext={this.findNext}
                            hasPrev={this.state.currentIndex > 0}
                            hasNext={this.state.currentIndex + 1 < photoGallery.length}
                            src={photoGallery[this.state.currentIndex]?.originalImageURL}/>
                    </div>   
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.photoGalleryBuilderReducer.loading,
    photoGallery: state.photoGalleryBuilderReducer.photoGalleryDetails.images || []
});

const mapDispatchToProps = {
    getPhotoGalleryRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGalleryBuilder);