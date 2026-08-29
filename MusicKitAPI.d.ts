declare namespace MusicKit {
    interface MusicKitAPI {
        'music': (
            path: string,
            params: {
                [key: string]: string
            },
            opts: {
                'fetchOptions': RequestInit
            }
        ) => Promise<{
            'data': unknown
        }>
    }
}
