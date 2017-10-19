import { IEpisode } from 'defs/interfaces/episode.interface';
import { IShow } from 'defs/interfaces/show.interface';

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
