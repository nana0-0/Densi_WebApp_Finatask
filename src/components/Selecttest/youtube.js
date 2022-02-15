import React from "react";

const Youtube = (props) => {
    const video = props.videos.map((video, i) => {
        console.log(video.videos[i].id.videoId);
        video = video.videos[i];
        const url = "https://www.youtube.com/embed/" + video.id.videoId;
        const title = video.snippet.title;
        const description = video.snippet.description;
        const thumbnails = video.snippet.thumbnails.default.url;
        const channel = video.snippet.channelTitle;
        return (
            <div key={url}>
                <p className="underline">{channel}</p>
                <div
                    style={{
                        margin: "0 auto",
                        textAlign: "center",
                        width: "300px",
                    }}
                >
                    <iframe
                        className="img"
                        title={title}
                        id="ytplayer"
                        type="ytplayer"
                        width="100%"
                        src={url}
                        frameBorder="0"
                    />
                </div>
            </div>
        );
    });

    return <div style={{ marginTop: "10px" }}>{video}</div>;
};

export default Youtube;

// const Youtube = (props) => {
//     console.log(props.videos.length);
//     const video = props.videos.map((video, i) => {
//         console.log(video.videos[i].id.videoId);
//         video = video.videos[i];
//         const url = "https://www.youtube.com/embed/" + video.id.videoId;
//         const title = video.snippet.title;
//         const description = video.snippet.description;
//         const thumbnails = video.snippet.thumbnails.default.url;
//         const channel = video.snippet.channelTitle;
//         return (
//             <>
//                 <p>{channel}</p>
//                     <div style={{ margin: "0 auto", textAlign: "center" ,width:"300px"}}>
//                         <iframe
//                             className="img"
//                             title={title}
//                             id="ytplayer"
//                             type="ytplayer"
//                             width="100%"
//                             src={url}
//                             frameBorder="0"
//                         />
//                     </div>
//             </>
//         );
//     });

//     return <div style={{ marginTop: "10px" }}>{video}</div>;
// };

// export default Youtube;
