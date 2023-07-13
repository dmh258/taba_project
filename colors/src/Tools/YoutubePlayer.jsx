import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId, title, channel }) => {
  const opts = {
    width: '370px',
    height: '300px',
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const onEnd = (event) => {
    event.target.stopVideo(0);
  };

  //제목 줄임표
  const truncateTitle = (title, maxLength) => {
    if (title.length > 60) {
      return title.substring(0, 60) + '...';
    }
    return title;
  };

  const channelStyle = {
    fontSize: '14px',
    color: '#666666',
    margin: '3px 0',
    flexWrap: 'wrap',
  };

  const titleStyle = {
    fontSize: '15px',
    margin: '0',
    width: '360px',
    flexWrap: 'wrap',
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onEnd={onEnd} />
      <p style={titleStyle}>{truncateTitle(title)}</p>
      <p style={channelStyle}>{channel}</p>

    </div>
  );
};

export default YoutubePlayer;
