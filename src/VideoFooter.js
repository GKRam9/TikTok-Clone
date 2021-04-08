import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFotter__text">
        <h3>Hello</h3>
        <p>Hii Dx dv dvg dgv dgvceec</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <p className="ticker">Song</p>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
