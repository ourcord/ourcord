declare interface User {
   username?: string;
   discriminator?: string;
   id?: string;
   avatar?: string;
}

export interface EmojiRaw {
    id?: string;
    name?: string;
    roles?: string[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
}
