import { useState, useEffect } from 'react';
import './Youtubevideo.css';

const fallbackVideos = [
    {
        id: { videoId: "f199EMluMG4" },
        snippet: {
            title: "Apple Event - May 7",
            thumbnails: { medium: { url: "https://i.ytimg.com/vi/f199EMluMG4/hqdefault.jpg" } }
        }
    },
    {
        id: { videoId: "TX9qSaGXFyg" },
        snippet: {
            title: "Introducing Apple Vision Pro",
            thumbnails: { medium: { url: "https://i.ytimg.com/vi/TX9qSaGXFyg/hqdefault.jpg" } }
        }
    },
    {
        id: { videoId: "xqyUdNxWazA" },
        snippet: {
            title: "iPhone 15 Pro - Titanium",
            thumbnails: { medium: { url: "https://i.ytimg.com/vi/xqyUdNxWazA/hqdefault.jpg" } }
        }
    },
    {
        id: { videoId: "jwmS1gcaqUU" },
        snippet: {
            title: "MacBook Air M3",
            thumbnails: { medium: { url: "https://i.ytimg.com/vi/jwmS1gcaqUU/hqdefault.jpg" } }
        }
    },
    {
        id: { videoId: "FjHIGqG0Z7k" },
        snippet: {
            title: "Apple Watch Series 9",
            thumbnails: { medium: { url: "https://i.ytimg.com/vi/FjHIGqG0Z7k/hqdefault.jpg" } }
        }
    },
    {
        id: { videoId: "gQKmmFk6Rvk" },
        snippet: {
            title: "The new iPad Pro",
            thumbnails: { medium: { url: "https://i.ytimg.com/vi/gQKmmFk6Rvk/hqdefault.jpg" } }
        }
    }
];

function Youtubevideo() {
    const [getAppleVideos, setAppleVideos] = useState([]);
    const apiKey = import.meta.env.VITE_APPLE_API_KEY;
    useEffect(() => {
        const getAppleVideos = async () => {
            try {
                if (!apiKey) {
                    throw new Error("No API key provided");
                }
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=${apiKey}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch from YouTube API");
                }
                const data = await response.json();
                setAppleVideos(data.items && data.items.length > 0 ? data.items : fallbackVideos);
            } catch (error) {
                console.log("Using fallback videos due to error:", error.message);
                setAppleVideos(fallbackVideos);
            }
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