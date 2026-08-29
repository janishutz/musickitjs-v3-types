/**
     * The bitrate to choose for playback. HIGH is 256kbps, STANDARD is 64kbps
     */
export enum PlaybackBitrate {
    'HIGH',
    'STANDARD'
}

/**
     * State of the player. See https://js-cdn.music.apple.com/musickit/v3/docs/iframe.html?id=reference-javascript-musickit--page&viewMode=story&args=#playbackstates
     */
export enum PlaybackStates {
    'none',
    'loading',
    'playing',
    'paused',
    'stopped',
    'ended',
    'seeking',
    'waiting',
    'stalled',
    'completed'
}

export enum PlayerRepeatMode {
    'all',
    'none',
    'one'
}

export enum PlayerShuffleMode {
    'on',
    'off'
}

export interface Artwork {
    'bgColor': string;
    'height': number;
    'width': number;
    'textColor1': string;
    'textColor2': string;
    'textColor3': string;
    'textColor4': string;
    'url': string;
}
