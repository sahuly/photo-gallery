import React, { Component } from 'react';

import Layout from './components/Layout';
import PhotoGalleryBuilder from './containers/PhotoGalleryBuilder/PhotoGalleryBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <PhotoGalleryBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;