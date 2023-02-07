import { KZ_IMG_PATH, NFACTORIAL_IMG_PARH, TESLA_IMG_PATH } from "../images_home";
import Tweet from './Tweet'

export default function TweetsList(){
    const tweets = [
        {
            authorName: 'Free KZ',
            authorsUsername: '@kz',
            img: KZ_IMG_PATH,
            content: 'UPDATE: Alibek says he is not considered to be a minister', 
            replies: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'nfactorial',
            authorsUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PARH,
            content: 'UPDATE: New ML courses! Hurry up to register', 
            replies: 500,
            retweets: 1700,
            likes: 854
        },
        {
            authorName: 'Tesla',
            authorsUsername: '@tesla',
            img: TESLA_IMG_PATH,
            content: 'UPDATE: Tesla Model X sets up new record!!!', 
            replies: 2234,
            retweets: 1000,
            likes: 1258
        }
    ]
    return(
        tweets.map((tweet, index)=><Tweet {...tweet} key={index}/>)
    )
}