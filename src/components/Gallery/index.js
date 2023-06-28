import React from 'react'
import { App} from './Gallery'
import ReactImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import images from './images'


const Gallery = () => {

  return (
    <App>
      <ReactImageGallery items={images} 
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
      />
    </App>
  )
}

export default Gallery
