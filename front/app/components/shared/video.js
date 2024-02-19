import React from "react";
const VideoComponent = (props) => {
  const {
    name,
    extStyles,
    description,
    uploadDate = "2022-10-01T08:00:00+08:00",
    duration,
    thumbnailUrl,
    src,
    text,
    type,
    ...videoProps
  } = props;
  return (
    <>
      <video
        itemProp="contentURL"
        {...videoProps}
        itemScope
        itemType="http://schema.org/VideoObject"
        style={{ ...extStyles }}
        className="video_component"
      >
        <source src={src} type={type} />
        {text}
      </video>
      <meta itemProp="name" content={name} />
      <meta itemProp="description" content={description} />
      <meta itemProp="duration" content={duration} />
      <meta itemProp="thumbnailUrl" content={thumbnailUrl} />
      <meta itemProp="uploadDate" content={uploadDate} />
    </>
  );
};

export default VideoComponent;
