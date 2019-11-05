import React from "react";
import ImageCard from "./imageCard";

import "./ImageList.css";

const ImageList = props => {
  const title = props.startLoading ? "Loading..." : props.images.length <=0 ? "No Image Found" : "Images"

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="gridView">
        { props.images.map(image => {
          return <ImageCard key={image.id} image={image} />;
        }) }
      </div>
    </div>
  );
};

export default ImageList;
