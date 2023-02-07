import { COMMENTS, KZ_IMG_PATH, LIKES, RETWEETS, SHARE } from "../images_home"

export default function TweetList(tweet){
    return(
        <div className="mt-3 px-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <p className="mx-5" style={{fontSize:13, fontWeight:600}}>You might like!<span style={{color:'blue', marginLeft: '5px'}}>See more</span></p>
            <div className="d-flex">
                <img src={tweet.img} style={{width:50, height:50, borderRadius:50}}/>
                <div className="mx-3">
                    <p style={{fontWeight:600}}>{tweet.authorName} <span style={{color:'gray'}}>{tweet.authorsUsername}</span></p>
                    <p>{tweet.content.lenght > 200 ? 
                        tweet.content.slice(0, 200) + '...' : tweet.content}</p>
                </div>
            </div>

                <div className="d-flex m-auto justify-content-between" style={{width:'80%'}}>
                    <div className="d-flex ">
                        <div style={{width:20, height:20, marginLeft: '15px'}}>{COMMENTS}</div>
                        <p className="px-1">{tweet.replies}</p>
                    </div>
                    <div className="d-flex ">
                        {RETWEETS}
                        <p className="px-1">{tweet.retweets}</p>
                    </div>
                    <div className="d-flex ">
                        {LIKES}
                        <p className="px-1">{tweet.likes}</p>
                    </div>
                    <div className="d-flex ">
                        {SHARE}
                        <p className="px-1">{}</p>
                    </div>
                </div>
        </div>
        
        
    )
}