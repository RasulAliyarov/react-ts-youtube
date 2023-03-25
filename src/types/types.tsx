

export default interface IVideos {
    id: { videoId: string };
    snippet: ISnippet;
}

// export default interface IData {
//     items: IVideos;
// }

export interface ISnippet {
    title: string;
    publishedAt: string;
    channelTitle: string;
    description: string;
    resourceId: IResourceId;
    thumbnails: IMediumImg;
}
export interface IMediumImg {
    medium: IMediumImgUrl;
}
export interface IMediumImgUrl {
    url: string;
}
export interface IResourceId {
    videoId: string;
}
