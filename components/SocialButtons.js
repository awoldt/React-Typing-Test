import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from 'react-share'

const SocialButtons = () => {
    return (
        <div className='text-center mt-3'>
            <span style={{marginRight: '20px'}}>Challenge your friends</span>
            <FacebookShareButton url={'www.google.com'} style={{marginRight: '3px'}}>
                <FacebookIcon size={32}/>
            </FacebookShareButton>
            <TwitterShareButton url={'www.google.com'} >
                <TwitterIcon size={32}/>
            </TwitterShareButton>
        </div>
    )
}

export default SocialButtons
