import React from "react";
import axios from "axios";
import Youtube from "./youtube.js";
import { Link } from "react-router-dom";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class Selecttest extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     videosCat: [],
        //     videosDog: [],
        //     videosOtters: [],
        // };
        this.onSerchYoutube("");
        this.state = {
            videosCat: [
                {
                    videos: [
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
                },
            ],
            videosDog: [
                {
                    videos: [
                        {
                            kind: "youtube#searchResult",
                            etag: "xNGyu3qjk-CZ4xY-n-wx7nFzprs",
                            id: {
                                kind: "youtube#video",
                                videoId: "Z-_pCzr8s3g",
                            },
                            snippet: {
                                publishedAt: "2021-01-28T03:00:07Z",
                                channelId: "UCrDj5t8Q9ZFSGft7a3PWl9g",
                                title: "「どうぶつピース！！かわいい大図鑑」犬編（102）岡山チワワ大家族14匹",
                                description:
                                    "番組で放送した中からワンちゃんのかわいい瞬間を厳選してお届け！ ▽岡山チワワ大家族14匹 《「どうぶつピース！！」はテレビ東京にて ...",
                                thumbnails: {
                                    default: {
                                        url: "https://i.ytimg.com/vi/Z-_pCzr8s3g/default.jpg",
                                        width: 120,
                                        height: 90,
                                    },
                                    medium: {
                                        url: "https://i.ytimg.com/vi/Z-_pCzr8s3g/mqdefault.jpg",
                                        width: 320,
                                        height: 180,
                                    },
                                    high: {
                                        url: "https://i.ytimg.com/vi/Z-_pCzr8s3g/hqdefault.jpg",
                                        width: 480,
                                        height: 360,
                                    },
                                },
                                channelTitle: "テレビ東京公式 TV TOKYO",
                                liveBroadcastContent: "none",
                                publishTime: "2021-01-28T03:00:07Z",
                            },
                        },
                        {
                            kind: "youtube#searchResult",
                            etag: "q_GoYRi-cc_Z-ZxggtxXJr4LX7o",
                            id: {
                                kind: "youtube#video",
                                videoId: "4kfudyahJcc",
                            },
                            snippet: {
                                publishedAt: "2021-03-03T10:27:57Z",
                                channelId: "UCAsJ8B7WArS4JLAmuMFw0Cw",
                                title: "【豆柴】初対面、元気MAX！大暴走！【子犬】【多頭飼い】",
                                description:
                                    "豆柴＃子犬＃多頭飼い 「豆じろうちゃんねる」はこちら↓ https://www.youtube.com/channel/UC3gNbDA1WUUKE5enREvVUFA 生後53 ...",
                                thumbnails: {
                                    default: {
                                        url: "https://i.ytimg.com/vi/4kfudyahJcc/default.jpg",
                                        width: 120,
                                        height: 90,
                                    },
                                    medium: {
                                        url: "https://i.ytimg.com/vi/4kfudyahJcc/mqdefault.jpg",
                                        width: 320,
                                        height: 180,
                                    },
                                    high: {
                                        url: "https://i.ytimg.com/vi/4kfudyahJcc/hqdefault.jpg",
                                        width: 480,
                                        height: 360,
                                    },
                                },
                                channelTitle: "幾三ちゃんねる",
                                liveBroadcastContent: "none",
                                publishTime: "2021-03-03T10:27:57Z",
                            },
                        },
                        {
                            kind: "youtube#searchResult",
                            etag: "5MYtjQtTXbbzGGMpOh061Q-IGWg",
                            id: {
                                kind: "youtube#video",
                                videoId: "V0i8iMYb4h4",
                            },
                            snippet: {
                                publishedAt: "2018-10-03T10:20:57Z",
                                channelId: "UCFzLlG5qh9Kb7wQ6U3m1I6g",
                                title: "【面白い動画】 かわいい猫 - かわいい犬 - 最も面白いペットの動画 #41",
                                description:
                                    "【面白い動画】 かわいい猫 - かわいい犬 - 最も面白いペットの動画 #41 https://youtu.be/V0i8iMYb4h4 【面白い動画】 かわいい猫 ...",
                                thumbnails: {
                                    default: {
                                        url: "https://i.ytimg.com/vi/V0i8iMYb4h4/default.jpg",
                                        width: 120,
                                        height: 90,
                                    },
                                    medium: {
                                        url: "https://i.ytimg.com/vi/V0i8iMYb4h4/mqdefault.jpg",
                                        width: 320,
                                        height: 180,
                                    },
                                    high: {
                                        url: "https://i.ytimg.com/vi/V0i8iMYb4h4/hqdefault.jpg",
                                        width: 480,
                                        height: 360,
                                    },
                                },
                                channelTitle: "Kute Cats",
                                liveBroadcastContent: "none",
                                publishTime: "2018-10-03T10:20:57Z",
                            },
                        },
                    ],
                },
            ],
            videosOtters: [
                {
                    videos: [
                        {
                            kind: "youtube#searchResult",
                            etag: "d_xbzMIPUHeikM59XnSAm4WTNig",
                            id: {
                                kind: "youtube#video",
                                videoId: "7209C874T2U",
                            },
                            snippet: {
                                publishedAt: "2022-01-16T09:30:00Z",
                                channelId: "UC4hQbfN_ZRy4lSngWxuhHxA",
                                title: "旬の寒ぶりをカワウソに召し上がってもらった！ otter ate the cold yellowtail in season!",
                                description:
                                    "このチャンネルでは毎日18時半に動画を投稿しています！ 動画に出てくるカワウソの名前はさくら♀、猫はもち♂です。 もちのチャンネルは ...",
                                thumbnails: {
                                    default: {
                                        url: "https://i.ytimg.com/vi/7209C874T2U/default.jpg",
                                        width: 120,
                                        height: 90,
                                    },
                                    medium: {
                                        url: "https://i.ytimg.com/vi/7209C874T2U/mqdefault.jpg",
                                        width: 320,
                                        height: 180,
                                    },
                                    high: {
                                        url: "https://i.ytimg.com/vi/7209C874T2U/hqdefault.jpg",
                                        width: 480,
                                        height: 360,
                                    },
                                },
                                channelTitle: "ma ko",
                                liveBroadcastContent: "none",
                                publishTime: "2022-01-16T09:30:00Z",
                            },
                        },
                        {
                            kind: "youtube#searchResult",
                            etag: "J1tFdL3FwYwIFbTbuJcapXHuPtI",
                            id: {
                                kind: "youtube#video",
                                videoId: "VNg727paMOY",
                            },
                            snippet: {
                                publishedAt: "2022-02-11T10:00:31Z",
                                channelId: "UCDYyCQAk60CqabvkL5gU3Mw",
                                title: "ついにカワウソコタローとハナがあの大人気チョコレートになりました！　Otters Get Excited About Special Chocolate!",
                                description:
                                    "もうすぐバレンタインデー！なんと今年は、大人気のほっこりカワウソシリーズでおなじみのフランス屋製菓さんに、コタハナとのコラボチョコ「 ...",
                                thumbnails: {
                                    default: {
                                        url: "https://i.ytimg.com/vi/VNg727paMOY/default.jpg",
                                        width: 120,
                                        height: 90,
                                    },
                                    medium: {
                                        url: "https://i.ytimg.com/vi/VNg727paMOY/mqdefault.jpg",
                                        width: 320,
                                        height: 180,
                                    },
                                    high: {
                                        url: "https://i.ytimg.com/vi/VNg727paMOY/hqdefault.jpg",
                                        width: 480,
                                        height: 360,
                                    },
                                },
                                channelTitle: "KOTSUMET",
                                liveBroadcastContent: "none",
                                publishTime: "2022-02-11T10:00:31Z",
                            },
                        },
                        {
                            kind: "youtube#searchResult",
                            etag: "7eko-i6fdYWzpetYnK9WICffmUI",
                            id: {
                                kind: "youtube#video",
                                videoId: "dEFYzHybEzc",
                            },
                            snippet: {
                                publishedAt: "2022-02-12T09:30:04Z",
                                channelId: "UC4hQbfN_ZRy4lSngWxuhHxA",
                                title: "巨大段ボールの中に入ってみてカワウソにちょっかい出してみたはずだったが… I tried to get inside the cardboard box and messed with otter",
                                description:
                                    "このチャンネルでは毎日18時半に動画を投稿しています！ 動画に出てくるカワウソの名前はさくら♀、猫はもち♂です。 もちのチャンネルは ...",
                                thumbnails: {
                                    default: {
                                        url: "https://i.ytimg.com/vi/dEFYzHybEzc/default.jpg",
                                        width: 120,
                                        height: 90,
                                    },
                                    medium: {
                                        url: "https://i.ytimg.com/vi/dEFYzHybEzc/mqdefault.jpg",
                                        width: 320,
                                        height: 180,
                                    },
                                    high: {
                                        url: "https://i.ytimg.com/vi/dEFYzHybEzc/hqdefault.jpg",
                                        width: 480,
                                        height: 360,
                                    },
                                },
                                channelTitle: "ma ko",
                                liveBroadcastContent: "none",
                                publishTime: "2022-02-12T09:30:04Z",
                            },
                        },
                    ],
                },
            ],
        };
    }

    onSerchYoutube = () => {
        // const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;
        // axios
        //   .get(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${'ねこ'}&maxResults=3&key=${YOUTUBE_API_KEY}`)
        //   .then(response => {
        //       this.setState({
        //         videosCat: response.data.items,
        //       });
        //   })
        //   .catch(() => {
        //       console.log('通信に失敗しました');
        //   });
        //  axios
        //   .get(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${'いぬ'}&maxResults=3&key=${YOUTUBE_API_KEY}`)
        //   .then(response => {
        //       this.setState({
        //         videosDog: response.data.items,
        //       });
        //   })
        //   .catch(() => {
        //       console.log('通信に失敗しました');
        //   });
        //  axios
        //   .get(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${'カワウソ'}&maxResults=3&key=${YOUTUBE_API_KEY}`)
        //   .then(response => {
        //       this.setState({
        //         videosOtters: response.data.items,
        //       });
        //   })
        //   .catch(() => {
        //       console.log('通信に失敗しました');
        //   });
    };

    render() {
        return (
            <div className="selectcenter">
                <p>再生回数1位のネコの動画はこちら</p>
                <Youtube videos={this.state.videosCat} />
                <Link to="/cat">
                    <button className="btn">おすすめのネコの動画を見る</button>
                </Link>
                <p>再生回数1位のイヌの動画はこちら</p>
                <Youtube videos={this.state.videosDog} />
                <Link to="/dog">
                    <button className="btn">おすすめのイヌの動画を見る</button>
                </Link>
                <p>再生回数1位のカワウソの動画はこちら</p>
                <Youtube videos={this.state.videosOtters} />
                <Link to="/otters">
                    <button className="btn">
                        おすすめのカワウソの動画を見る
                    </button>
                </Link>
            </div>
        );
    }
}
