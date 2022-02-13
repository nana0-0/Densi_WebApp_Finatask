import React from "react";
import axios from "axios";
import Youtube from "./youtube.js";
import { Link } from "react-router-dom";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class Cattest extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     videosCat: [],
        //     videosCat_data: [],
        // };
        this.state = {
            videosCat: [
                {
                    kind: "youtube#searchResult",
                    etag: "O_V44CnOgWB8Xt3ahcUENBCqqPY",
                    id: {
                        kind: "youtube#video",
                        videoId: "gsT6eKsnT0M",
                    },
                    snippet: {
                        publishedAt: "2020-03-20T13:00:11Z",
                        channelId: "UC9zY_E8mcAo_Oq772LEZq8Q",
                        title: "DISH// (北村匠海) - 猫 / THE FIRST TAKE",
                        description:
                            "「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。 “音楽とは、何か。一発撮りで、向き合う。",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/gsT6eKsnT0M/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/gsT6eKsnT0M/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/gsT6eKsnT0M/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "THE FIRST TAKE",
                        liveBroadcastContent: "none",
                        publishTime: "2020-03-20T13:00:11Z",
                    },
                },
                {
                    kind: "youtube#searchResult",
                    etag: "FcThsuLtrk1nocOvbOUV4rlGrxE",
                    id: {
                        kind: "youtube#video",
                        videoId: "RGGLQniyc6o",
                    },
                    snippet: {
                        publishedAt: "2022-02-11T11:01:00Z",
                        channelId: "UCplhkHsYKxXjTde1lq8F-4w",
                        title: "深夜にこっそりトリックアートを貼っておいたら猫がこうなりました…w",
                        description:
                            "お問い合わせ contact@motimaru.jp ⬇️もち様公式LINE https://lin.ee/BGMF0V6 ⬇️もち様LINEスタンプ ...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/RGGLQniyc6o/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/RGGLQniyc6o/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/RGGLQniyc6o/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "もちまる日記",
                        liveBroadcastContent: "none",
                        publishTime: "2022-02-11T11:01:00Z",
                    },
                },
                {
                    kind: "youtube#searchResult",
                    etag: "9OJthMmaC-YX7H7RjcpxhF1m6CU",
                    id: {
                        kind: "youtube#video",
                        videoId: "qyvcDxlvYMI",
                    },
                    snippet: {
                        publishedAt: "2022-02-02T11:01:00Z",
                        channelId: "UCplhkHsYKxXjTde1lq8F-4w",
                        title: "床にトリックアートを置いたら猫の反応がマジで天才すぎました…",
                        description:
                            "お問い合わせ contact@motimaru.jp ⬇️もち様公式LINE https://lin.ee/BGMF0V6 ⬇️もち様LINEスタンプ ...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/qyvcDxlvYMI/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/qyvcDxlvYMI/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/qyvcDxlvYMI/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "もちまる日記",
                        liveBroadcastContent: "none",
                        publishTime: "2022-02-02T11:01:00Z",
                    },
                },
            ],
            videosDog: [],
            videosOtters: [],
        };
        this.onSerchYoutube("");
    }

    onSerchYoutube = () => {
        // const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;
        // const id = this.state.videosCat[0].id.videoId;
        // const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics,status`;
        // axios
        //   .get(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${'カワウソ'}&maxResults=3&key=${YOUTUBE_API_KEY}`)
        //   .then(response => {
        //       this.setState({
        //         videosCat: response.data.items,
        //       });
        //   })
        //   .catch(() => {
        //       console.log('通信に失敗しました');
        //   });
        // axios
        //   .get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics,status`)
        //   .then(response => {
        //       this.setState({
        //         videosCat_data: response.data.items,
        //       });
        //   })
        //   .catch(() => {
        //       console.log('通信に失敗しました');
        //   });
    };

    render() {
        return (
            <>
                {this.state.videosCat.map((e, i) =>
                    <Youtube
                        videos={e}
                        key={e.id.videoId}
                    />
                )}
            </>
        );
    }
}
