import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const Youtube = (props) => {
    const video = props.videos;
    const url = "https://www.youtube.com/embed/" + video.id.videoId;
    const title = video.snippet.title;

    const [cat_data, setCat_data] = useState({
        kind: "youtube#videoListResponse",
        etag: "ZP-fN01ukKwm6CjG7KoI5C8_fcc",
        items: [
            {
                kind: "youtube#video",
                etag: "smDxK4kO-dpTBKdWNuaOYjl9Y9w",
                id: "gsT6eKsnT0M",
                snippet: {
                    publishedAt: "2020-03-20T13:00:11Z",
                    channelId: "UC9zY_E8mcAo_Oq772LEZq8Q",
                    title: "DISH// (北村匠海) - 猫 / THE FIRST TAKE",
                    description:
                        '「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。\n“音楽とは、何か。一発撮りで、向き合う。”\n\n第32回は、若い世代を中心に人気を集めるDISH//からVo.Gt.北村匠海が登場。\nシンガーソングライターあいみょんが作詞作曲をしたラブソング「猫」を、メンバーがこの日のために事前レコーディングしたアコースティックアレンジで披露する。\n\nSTREAMING&DOWNLOAD:https://lnk.to/XWUOz\n\n■Podcast公開中\nDISH// (北村匠海) × マカロニえんぴつ（はっとり） / THE FIRST TAKE MUSIC (Podcast)\nhttps://lnk.to/Epy5es31\n\n■J-WAVE（81.3FM）「THE FIRST TAKE MUSIC」\n（「SONAR MUSIC」内 コーナー番組/毎週木曜日 21:45～21:55頃 放送）\nhttps://bit.ly/3d5gmmk\n\n■DISH// SNS\nOfficial Site：https://dish-web.com/\nTwitter：https://twitter.com/dish_info\nInstagram：https://www.instagram.com/dish__official/\n\n\n■DISH// YouTube Channel\nhttps://www.youtube.com/user/dishSMEJ\n\n\n■「THE FIRST TAKE」 SNS\nInstagram：https://www.instagram.com/the_firsttake/\nTwitter：https://twitter.com/The_FirstTake\n\n\nTHE FIRST TAKE is MUSIC REPORTAGE.\n\n—\n\n白いスタジオに置かれた、一本のマイク。\nここでのルールは、ただ一つ。\n一発撮りのパフォーマンスをすること。\n\nTHE FIRST TAKE is a YouTube Channel dedicated to shooting musicians and\nsingers performing in a single take.\n“WHAT IS MUSIC. Capturing the essence. In one take only.”\n\nEpisode 32 will give vocalist and guitarist Takumi Kitamura from DISH//, the band with high popularity from young generations.\nHe will give the love song "Neko (Cat)", written and composed by the singer-songwriter AIMYON, with the pre-recorded acoustic performance by members.\n\n\n\nA single mic placed in a white studio.\nThere is only rule.\nOne take only.\n\n\nCREDITS\n\n—\n\nCreative Director / Art Director: Keisuke Shimizu\nArt Director: Kana Takarada\nCopywriter: Hiroshi Yamazaki\nDirector of Photography: Kazuki Nagayama\nProducer: Kentaro Kinoshita\nProduction Manager: Hinako Arifuku\n\n#THEFIRSTTAKE #DISH// #北村匠海 #猫',
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
                        standard: {
                            url: "https://i.ytimg.com/vi/gsT6eKsnT0M/sddefault.jpg",
                            width: 640,
                            height: 480,
                        },
                        maxres: {
                            url: "https://i.ytimg.com/vi/gsT6eKsnT0M/maxresdefault.jpg",
                            width: 1280,
                            height: 720,
                        },
                    },
                    channelTitle: "THE FIRST TAKE",
                    tags: [
                        "the first take",
                        "first take",
                        "ファーストテイク",
                        "ファステク",
                        "一発撮り",
                        "緊張感",
                        "COLORS",
                        "DSCVR",
                        "Tokyo sounds",
                        "lute",
                        "tiny desk",
                        "清水康彦",
                        "服部昌孝",
                        "ライブ",
                        "Live",
                        "橘 柊生",
                        "矢部 昌暉",
                        "ロックバンド",
                        "CIRCLE",
                        "バンド",
                        "匠海",
                        "DISH",
                        "北村匠海",
                        "泉 大智",
                        "菅田将暉",
                        "あいみょん",
                        "新田真剣佑とんかつDJアゲ太郎",
                        "君の膵臓をたべたい",
                        "サヨナラまでの30分",
                        "砕け散るところを見せてあげる",
                        "超特急",
                        "EBiDAN",
                        "M!LK",
                    ],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    defaultLanguage: "ja",
                    localized: {
                        title: "DISH// (北村匠海) - 猫 / THE FIRST TAKE",
                        description:
                            '「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。\n“音楽とは、何か。一発撮りで、向き合う。”\n\n第32回は、若い世代を中心に人気を集めるDISH//からVo.Gt.北村匠海が登場。\nシンガーソングライターあいみょんが作詞作曲をしたラブソング「猫」を、メンバーがこの日のために事前レコーディングしたアコースティックアレンジで披露する。\n\nSTREAMING&DOWNLOAD:https://lnk.to/XWUOz\n\n■Podcast公開中\nDISH// (北村匠海) × マカロニえんぴつ（はっとり） / THE FIRST TAKE MUSIC (Podcast)\nhttps://lnk.to/Epy5es31\n\n■J-WAVE（81.3FM）「THE FIRST TAKE MUSIC」\n（「SONAR MUSIC」内 コーナー番組/毎週木曜日 21:45～21:55頃 放送）\nhttps://bit.ly/3d5gmmk\n\n■DISH// SNS\nOfficial Site：https://dish-web.com/\nTwitter：https://twitter.com/dish_info\nInstagram：https://www.instagram.com/dish__official/\n\n\n■DISH// YouTube Channel\nhttps://www.youtube.com/user/dishSMEJ\n\n\n■「THE FIRST TAKE」 SNS\nInstagram：https://www.instagram.com/the_firsttake/\nTwitter：https://twitter.com/The_FirstTake\n\n\nTHE FIRST TAKE is MUSIC REPORTAGE.\n\n—\n\n白いスタジオに置かれた、一本のマイク。\nここでのルールは、ただ一つ。\n一発撮りのパフォーマンスをすること。\n\nTHE FIRST TAKE is a YouTube Channel dedicated to shooting musicians and\nsingers performing in a single take.\n“WHAT IS MUSIC. Capturing the essence. In one take only.”\n\nEpisode 32 will give vocalist and guitarist Takumi Kitamura from DISH//, the band with high popularity from young generations.\nHe will give the love song "Neko (Cat)", written and composed by the singer-songwriter AIMYON, with the pre-recorded acoustic performance by members.\n\n\n\nA single mic placed in a white studio.\nThere is only rule.\nOne take only.\n\n\nCREDITS\n\n—\n\nCreative Director / Art Director: Keisuke Shimizu\nArt Director: Kana Takarada\nCopywriter: Hiroshi Yamazaki\nDirector of Photography: Kazuki Nagayama\nProducer: Kentaro Kinoshita\nProduction Manager: Hinako Arifuku\n\n#THEFIRSTTAKE #DISH// #北村匠海 #猫',
                    },
                    defaultAudioLanguage: "ja",
                },
                contentDetails: {
                    duration: "PT5M34S",
                    dimension: "2d",
                    definition: "hd",
                    caption: "true",
                    licensedContent: true,
                    contentRating: {},
                    projection: "rectangular",
                },
                status: {
                    uploadStatus: "processed",
                    privacyStatus: "public",
                    license: "youtube",
                    embeddable: true,
                    publicStatsViewable: true,
                    madeForKids: false,
                },
                statistics: {
                    viewCount: "171556373",
                    likeCount: "1105460",
                    favoriteCount: "0",
                    commentCount: "46249",
                },
            },
        ],
        pageInfo: {
            totalResults: 1,
            resultsPerPage: 1,
        },
    });

    console.log(video.id.videoId);

    const test = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY&part=snippet,contentDetails,statistics,status`;

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/videos?id=${video.id.videoId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics,status`
            )
            .then((response) => {
                setCat_data(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    }, []);

    return (
        <div key={url}>
            <iframe
                title={title}
                id="ytplayer"
                type="ytplayer"
                width="480"
                height="270"
                src={url}
                frameBorder="0"
            />
             <p className="viewcount"><em>{cat_data.items[0].statistics.viewCount}</em>回再生</p>
        </div>
    );
};

export default Youtube;
