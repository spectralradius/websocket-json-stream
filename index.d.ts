///<reference types="node" />
///<reference types="ws" />

import * as stream from 'stream';
import * as webSocket from 'ws';

declare class WebSocketJSONStream extends stream.Duplex {
    constructor(ws: webSocket);

    ws: webSocket;
}

declare namespace WebSocketJSONStream {}

export = WebSocketJSONStream;