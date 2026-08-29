declare namespace MusicKit {
    type MediaItem = object;

    interface Queue {
        'currentItem': MediaItem;
        'isEmpty': boolean;
        'items': MediaItem[];
        'length': number;
        'nextPlayableItem': MediaItem;
        'position': number;
        'previousPlayableItem': MediaItem;
    }

    interface QueueOptions {
        'album'?: string;
        'albums'?: string[];
        'musicVideo'?: string;
        'musicVideos'?: string[];
        'playlist'?: string;
        'playlists'?: string[];
        'song'?: string;
        'songs'?: string[];
    }

    interface SeekSeconds {
        'BACK': number;
        'FORWARD': number;
    }

    interface MusicKitInstance {
        'api': Readonly<MusicKitAPI>;
        'bitrate': Readonly<PlaybackBitrate>;
        'currentPlaybackDuration': Readonly<number>;
        'currentPlaybackProgress': Readonly<number>;
        'currentPlaybackTime': Readonly<number>;
        'currentPlaybackTimeRemaining': Readonly<number>;
        'isAuthorized': Readonly<boolean>;
        'isPlaying': Readonly<boolean>;
        'nowPlayingItem': Readonly<MediaItem>;
        'nowPlayingItemIndex': Readonly<number>;
        'playbackRate': Readonly<number>;
        'playbackState': Readonly<PlaybackStates>;
        'previewOnly': Readonly<boolean>;
        'queue': Readonly<Queue>;
        'queueIsEmpty': Readonly<boolean>;
        'repeatMode': Readonly<PlayerRepeatMode>;
        'seekSeconds': Readonly<SeekSeconds | undefined>;
        'shuffleMode': Readonly<PlayerShuffleMode>;
        'storefrontCountryCode': Readonly<string>;
        'storefrontId': Readonly<string>;
        'videoContainerElement': Readonly<HTMLVideoElement | undefined>;
        'volume': Readonly<number>;
        'addEventListener': ( name: string, callback: CallableFunction, options: {
            'once': boolean
        } ) => void;
        'authorize': () => Promise<string | void>;
        'changeToMediaAtIndex': ( index: number ) => Promise<void>;
        'changeToMediaItem': ( descriptor: MediaItem | string ) => Promise<void>;
        'changeUserStorefront': ( storefrontId: string ) => Promise<void>;
        'clearQueue': () => Promise<Queue>;
        'exitFullscreen': () => void;
        'mute': () => void;
        'pause': () => void;
        'play': () => void;
        'playAt': ( position: number, options: QueueOptions ) => Promise<Queue | void>;
        'playLater': ( options: QueueOptions ) => Promise<Queue | void>;
        'playNext': ( options: QueueOptions, clear: boolean ) => Promise<Queue | void>;
        'removeEventListener': ( name: string, callback: CallableFunction ) => void;
        'requestFullscreen': () => void;
        'seekBackward': () => Promise<void>;
        'seekForward': () => Promise<void>;
        'seekToTime': ( time: number ) => Promise<void>;
        'setQueue': ( options: QueueOptions ) => Promise<Queue | void>;
        'skipToNextItem': () => Promise<void>;
        'skipToPreviousItem': () => Promise<void>;
        'stop': () => void;
        'unauthorize': () => Promise<void>;
        'unmute': () => void;
    }
}
