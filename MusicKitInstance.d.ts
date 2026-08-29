import {
    PlaybackBitrate,
    PlaybackStates,
    PlayerRepeatMode,
    PlayerShuffleMode
} from './enums';
import type {
    MusicKitAPI
} from './MusicKitAPI.d.ts';

export type MediaItem = object;

export interface Queue {
    /**
     * The item at the `position` within `items` array
     */
    'currentItem': MediaItem;
    /**
     * True if the `length` of the queue is `0`
     */
    'isEmpty': boolean;
    /**
     * Array of `MediaItem`s in queue
     */
    'items': MediaItem[];
    /**
     * The number of `MediaItem`s in the queu
     */
    'length': number;
    /**
     * The next item after the `currentItem` in the queue
     */
    'nextPlayableItem': MediaItem;
    /**
     * The current index of the queue
     */
    'position': number;
    /**
     * The previous item after the `currentItem` in the queue
     */
    'previousPlayableItem': MediaItem;
}

/**
 * Used to set what is to be played
 */
export interface QueueOptions {
    'album'?: string;
    'albums'?: string[];
    'musicVideo'?: string;
    'musicVideos'?: string[];
    'playlist'?: string;
    'playlists'?: string[];
    'song'?: string;
    'songs'?: string[];
    /**
     * Set the repeat mode when setting the queue
     */
    'repeatMode'?: PlayerRepeatMode;
    /**
     * Whether or not to start playing
     */
    'startPlaying'?: boolean;
    /**
     * The number of seconds to seek to in the current item
     */
    'startTime'?: number;
}

export interface SeekSeconds {
    'BACK': number;
    'FORWARD': number;
}

export interface MusicKitInstance {
    /**
     * Access the Apple Music API
     */
    'api': Readonly<MusicKitAPI>;
    /**
     * The current bitrate
     */
    'bitrate': Readonly<PlaybackBitrate>;
    /**
     * The duration of the `nowPlayingItem`, in seconds
     */
    'currentPlaybackDuration': Readonly<number>;
    /**
     * Percentage of playback completion of `nowPlayingItem`, between 0 and 1
     */
    'currentPlaybackProgress': Readonly<number>;
    /**
     * The playhead position for the `nowPlayingItem`, in seconds
     */
    'currentPlaybackTime': Readonly<number>;
    /**
     * The remaining playback time for the `nowPlayingItem`, in seconds
     */
    'currentPlaybackTimeRemaining': Readonly<number>;
    /**
     * Set to true if user successfully signed in and authorized application via `authorize`
     */
    'isAuthorized': Readonly<boolean>;
    /**
     * True if audio is currently playing
     */
    'isPlaying': Readonly<boolean>;
    /**
     * The current MediaItem that is playing
     */
    'nowPlayingItem': Readonly<MediaItem>;
    /**
     * The index in the queue of the `nowPlayingItem`
     */
    'nowPlayingItemIndex': Readonly<number>;
    /**
     * The speed of playback, default is 1.0
     */
    'playbackRate': Readonly<number>;
    /**
     * The state of playback, for more information.
     */
    'playbackState': Readonly<PlaybackStates>;
    /**
     * If a user is not subscribed to Apple Music
     */
    'previewOnly': Readonly<boolean>;
    /**
     * The current playback queue
     */
    'queue': Readonly<Queue>;
    /**
     * True if the playback queue is empty
     */
    'queueIsEmpty': Readonly<boolean>;
    /**
     * Repeat mode for the player. Set here to control mode
     */
    'repeatMode': PlayerRepeatMode;
    /**
     * Used to configure seek behaviour, in seconds
     */
    'seekSeconds': SeekSeconds | undefined;
    /**
     * Control the shuffle mode for the player
     */
    'shuffleMode': PlayerShuffleMode;
    /**
     * The id of the authorized user's storefront
     */
    'storefrontCountryCode': Readonly<string>;
    /**
     * The storefrontId as configured for this `MusicKitInstance`
     */
    'storefrontId': Readonly<string>;
    /**
     * Set this to allow for playing music videos in the specified element.
     */
    'videoContainerElement': HTMLVideoElement | undefined;
    /**
     * The volume of the `HTMLMediaElement`, between 0 and 1
     */
    'volume': number;
    /**
     * Listen to an event on the `MusicKitInstance`
     * @param name - The Event name, see https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/story/reference-javascript-events--page
     * @param callback - a callable function, whose arguments depend on the event listened to
     * @param options - Any further options (currently only 'once', which, if set to true, removes the listener after it was triggered once)
     */
    'addEventListener': ( name: string, callback: CallableFunction, options: {
        'once': boolean
    } ) => void;
    /**
     * Authorize a user
     * @returns Promise resolving to string representing user, or if authorization failed, undefined
     */
    'authorize': () => Promise<string | void>;
    /**
     * Play `MediaItem` at specified index in Queue
     * @param index - The index to play at
     */
    'changeToMediaAtIndex': ( index: number ) => Promise<void>;
    /**
     * Change to a `MediaItem` or `string` representation of one instead of index
     * @param descriptor - The item
     */
    'changeToMediaItem': ( descriptor: MediaItem | string ) => Promise<void>;
    /**
     * Change the user's storefront to `storefrontId``
     * @param storefrontId - The storefront to change to
     */
    'changeUserStorefront': ( storefrontId: string ) => Promise<void>;
    /**
     * Clears the queue
     */
    'clearQueue': () => Promise<Queue>;
    /**
     * Close full-screen element, when applicable
     */
    'exitFullscreen': () => void;
    /**
     * Sets `volume` to `0`, previous value is stored
     */
    'mute': () => void;
    /**
     * Pause playback
     */
    'pause': () => void;
    /**
     * Starts playback of `nowPlayingItem`
     */
    'play': () => void;
    /**
     * Inserts the `MediaItem`(s) defined by `QueueOptions` at the position indicated in the current queue.
     * @param position - The index at which to insert
     * @param options - What to add to the queue
     */
    'playAt': ( position: number, options: QueueOptions ) => Promise<Queue | void>;
    /**
     * Inserts the item(s) after the last item in the current queue
     * @param options - What to add to the queue
     */
    'playLater': ( options: QueueOptions ) => Promise<Queue | void>;
    /**
     * Inserts the item(s) after the `nowPlayingItem`
     * @param options - What to add to the queue
     * @param clear - Whether or not to clear the queue again
     */
    'playNext': ( options: QueueOptions, clear?: boolean ) => Promise<Queue | void>;
    /**
     * Remove the event listener again
     * @param name - The name of the event to remove for
     * @param callback - The used callback function on addEventListener
     */
    'removeEventListener': ( name: string, callback: CallableFunction ) => void;
    /**
     * Make element full-screen
     * @param element - The element to make full-screen
     */
    'requestFullscreen': ( element: HTMLElement ) => void;
    /**
     * Seeks back `seekSeconds.BACK` seconds
     */
    'seekBackward': () => Promise<void>;
    /**
     * Seeks forward `seekSeconds.BACK` seconds
     */
    'seekForward': () => Promise<void>;
    /**
     * Seek to a specific time in the song
     * @param time - the time in seconds to move to
     */
    'seekToTime': ( time: number ) => Promise<void>;
    /**
     * Set items for the playback queue
     * @param options - Description of what is to be added to the queue
     */
    'setQueue': ( options: QueueOptions ) => Promise<Queue | void>;
    /**
     * Skip to next song in queue
     */
    'skipToNextItem': () => Promise<void>;
    /**
     * Skip to previous song in queue
     */
    'skipToPreviousItem': () => Promise<void>;
    /**
     * Stops the `nowPlayingItem`
     */
    'stop': () => void;
    /**
     * Unauthorizes the user from the application
     */
    'unauthorize': () => Promise<void>;
    /**
     * Unmute playback volume, setting it to value before muting
     */
    'unmute': () => void;
}
