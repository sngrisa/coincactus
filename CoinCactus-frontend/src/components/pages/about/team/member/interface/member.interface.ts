export interface IMember {
    id?: string | number;
    name: string;
    work: string;
    image: string;
    socialnetwork: SocialNetwork[];
}

export interface SocialNetwork {
    id?: string | number;
    icon: string;
    url: string;
}