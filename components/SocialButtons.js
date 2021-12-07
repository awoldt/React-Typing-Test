import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon} from 'react-share'

const SocialButtons = () => {
    return (
        <div className='text-center mt-3'>
            <span style={{marginRight: '20px'}}>Challenge your friends</span>
            <FacebookShareButton url={'www.google.com'} style={{marginRight: '3px'}}>
                <FacebookIcon size={32}/>
            </FacebookShareButton>
            <TwitterShareButton url={'www.google.com'} style={{marginRight: '3px'}}>
                <TwitterIcon size={32}/>
            </TwitterShareButton>
            <RedditShareButton url={'www.google.com'} >
                <RedditIcon size={32}/>
            </RedditShareButton>
        </div>
    )
}

export default SocialButtons
