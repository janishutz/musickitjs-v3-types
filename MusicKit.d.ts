import {
    Artwork,
    PlaybackBitrate
} from './enums';
import {
    MusicKitInstance
} from './MusicKitInstance';

export interface MusicKitConfiguration {
    /**
     * See https://js-cdn.music.apple.com/musickit/v3/docs/iframe.html?path=/story/get-started--page#configuring-musickit-on-the-web
     */
    'developerToken': string;

    /**
     * Your application configuration
     */
    'app': {
        /**
         * The name of your application
         */
        'name': string;

        /**
         * Build or version number of application
         */
        'build'?: string;

        /**
         * A URL to your application logo. Should be square at 152x152px
         */
        'icon'?: string;
    };

    'bitrate'?: PlaybackBitrate;

    /**
     * Set the storefront, which is set for the API requests.
     * If unset, then the authenticated user's storefrontId will be used.
     */
    'storefrontId'?: string;
}

export interface MusicKitObject {
    'configure': ( config: MusicKitConfiguration ) => Promise<MusicKitInstance>;

    'getInstance': () => MusicKitInstance;

    'formatArtworkURL': ( artwork: Artwork, width: number, height: number ) => string;
}
