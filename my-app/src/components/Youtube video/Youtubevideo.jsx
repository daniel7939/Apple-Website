import { useState, useEffect } from 'react';
import './Youtubevideo.css'
 function Youtubevideo() {
    const [getAppleVideos, setAppleVideos] = useState([]);
    const apiKey = import.meta.env.VITE_APPLE_API_KEY;
    useEffect(() => {
        const getAppleVideos = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=${apiKey}`);
                const data = await response.json();
                console.log(data);
                setAppleVideos(data.items);
            }   catch (error) {
                console.log(error);
            };
        };
        getAppleVideos();
            
    }, []);
    // console.log(getAppleVideos);
    return (
        <div className="youtube-videos-container">
            <h1 className="youtube-videos-title">Latest Apple Videos</h1>
            <div className="youtube-videos-list">
                {getAppleVideos.map((singlevideo) => {
                    const videoId = singlevideo.id.videoId;
                    const title = singlevideo.snippet.title;
                    const thumbnail = singlevideo.snippet.thumbnails.medium.url;
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                    return (
                        <div className="youtube-video-card" key={videoId}>
                            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                                <img src={thumbnail} alt={title} className="youtube-video-thumbnail" />
                            </a>
                            <div className="youtube-video-info">
                                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="youtube-video-title">
                                    {title}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Youtubevideo;