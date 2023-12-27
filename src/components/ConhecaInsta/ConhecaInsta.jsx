import React, { useEffect } from 'react';
import './ConhecaInsta.css';

const ConhecaInsta = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = 'https://www.instagram.com/embed.js';
        script1.async = true;
        script1.defer = true;

        script1.onload = () => {
            window.instgrm.Embeds.process();
        };

        document.body.appendChild(script1);

        return () => {
            document.body.removeChild(script1);
        };
    }, []);

    return (
        <div className="content">
            <div className="smart-home-connect-section">
                <h2>Conheça a Smart Home Connect</h2>
                <div className="videos">

                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/CvdN4HdOGku/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        data-instgrm-url="https://www.instagram.com/p/CvdN4HdOGku/?auto=0&amp;dl=0"
                    ></blockquote>

                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/Cx4DMkDrZSS/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                    ></blockquote>

                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/Cx1R-SKOh0s/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        data-instgrm-url="https://www.instagram.com/p/Cx1R-SKOh0s/?auto=0&amp;dl=0"
                    ></blockquote>

                </div>
            </div>
        </div>
    );
};

export default ConhecaInsta;
