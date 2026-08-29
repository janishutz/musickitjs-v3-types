import {
    MusicKitObject
} from './MusicKit';

declare global {
    var MusicKit: MusicKitObject;

    interface GlobalEventHandlersEventMap {
        'musickitloaded': CustomEvent<void>;
    }
}
