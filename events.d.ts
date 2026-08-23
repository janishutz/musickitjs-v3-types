// FIXME: TS error
declare global {
    interface GlobalEventHandlersEventMap {
        'musickitloaded': CustomEvent<void>;
    }
}
