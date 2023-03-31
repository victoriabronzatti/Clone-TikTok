import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@Victoria Bronzatti</h3>
            <p>Café levemente desastroso, mas ficou gostoso!</p>
            <div className='videoFooter__music'>
                <MusicNoteIcon className='videoFooter__icon'/>
                <div className='videoFooterMusic__text'>
                    <p>La Vie En Rose - Emily Watts</p>
                </div>
            </div>
        </div>
        <img 
        className='videoFooter__record'
        alt='Imagem of record'
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        />
    </div>
  )
}

export default VideoFooter