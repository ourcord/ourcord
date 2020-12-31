/* eslint-disable require-jsdoc */
import { EventEmitter as Emitter } from 'events';

declare module 'ourcord' {
    export interface MessageProperties {
        content?: string;
    }

    export interface EmbedProperties {
        embed: {
            title?: string;
            author?: object;
            thumbnail?: string;
            description?: string;
            fields?: object[];
            color?: string | number;
            colour?: EmbedProperties['embed']['color'];
            footer?: object;
            image?: string;
        };
    }

   declare interface Activity {
     name: string;
     type: number;
   }

    export interface ClientOptions {
        intents?: number;
        browser?: string;
        device?: string;
        prefix?: string;
        cacheChannels?: boolean;
        cacheGuilds?: boolean;
        cacheUsers?: boolean;
        cacheMembers?: boolean;
        activity?: Activity;
        status?: 'online' | 'idle' | 'dnd' | 'invisible';
        defaultImageFormat?: 'gif' | 'png' | 'jpg' | 'jpeg' | 'webp';
        defaultImageSize?: number;
    }

    export class Client extends Emitter {
        token: string;
        socket: typeof Emitter;
        config: ClientOptions;

        /**
         * The main client constructor.
         * @param {string} token The client's token used for gateway connection.
         * @param {ClientOptions} [options] Options this client is instantiated with.
         */
        constructor(token: string, options?: ClientOptions);
        getMetaData(): {
            op: number;
            d: {
                token: string;
                intents?: number;
                properties: {
                    $os: any;
                    $browser: string;
                    $device: string;
                };
            };
        };
        messageHandler(message: string, flag: any, websocket: any): void;
        errorHandler(error: string, emitter: Emitter): void;
        _sendMessage(channel: string, content: string | object): Promise<JSON>;
        _MessageEmbed(channel: string, options: EmbedProperties): Promise<JSON>;
    }
}
