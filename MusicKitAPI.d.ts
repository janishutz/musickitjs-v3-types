export interface MusicKitAPI {
    /**
     * This is the primary mean of accessing the Apple Music API.
     * @see https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-api--page
     * @param path - The Apple Music API path to use
     * @param queryParameters - URL query parameters to be appended to the request URL
     * @param options - Extra options to pass directly to the underlying fetch call.
     * @returns The data in an object. The type varies across paths.
     */
    'music': (
        path: string,
        queryParameters?: {
            [key: string]: unknown
        },
        opts?: {
            'fetchOptions': RequestInit
        }
    ) => Promise<{
        'data': unknown
    }>
}
