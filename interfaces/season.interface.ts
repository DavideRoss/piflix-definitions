import { IEpisode } from 'defs/episode.interface';
import { IShow } from 'defs/show.interface';

export interface ISeason {
    remoteId: number;
    name: string;
    number: number;
    image: string;

    premiere: Date;
    end: Date;

    folder: string;
    alias: string;

    show: IShow;
    episodes: IEpisode[];
}