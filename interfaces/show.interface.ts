import { IEpisode } from 'defs/episode.interface';
import { ISeason } from 'defs/season.interface';

export interface IShow {
    remoteId: number;
    name: string;
    image: string;
    officialSite: string;
    premiere: Date;

    folder: string;
    alias: string;

    seasons: ISeason[];
    episodes: IEpisode[];
}
