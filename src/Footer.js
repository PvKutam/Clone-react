import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid,Slider } from '@mui/material';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
      <img className='footer__albumLogo' src="https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg" alt=""/>
      <div className='footer__songInfo'>
        <h4> No song is playing</h4>
        <p>...  </p>
      </div>
      </div>
      <div className='footer__center'>
      <ShuffleIcon className='footer_green'/>
      <SkipPreviousIcon className='footer_icon'/>
      <PlayCircleOutlineIcon  fontSize='large' className='footer_icon'/>
      <SkipNextIcon className='footer_icon'/>
      <RepeatIcon className='footer_green'/>
      </div>
      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
          <Slider aria-labelledby="continuous-slider"/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
