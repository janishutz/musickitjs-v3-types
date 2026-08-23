declare namespace MusicKit {
    /**
     * The bitrate to choose for playback. HIGH is 256kbps, STANDARD is 64kbps
     */
    enum PlaybackBitrate {
        'HIGH',
        'STANDARD'
    }

    /**
     * State of the player. See https://js-cdn.music.apple.com/musickit/v3/docs/iframe.html?id=reference-javascript-musickit--page&viewMode=story&args=#playbackstates
     */
    enum PlaybackStates {
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

    enum PlayerRepeatMode {
        'all',
        'none',
        'one'
    }

    enum PlayerShuffleMode {
        'on',
        'off'
    }
}
