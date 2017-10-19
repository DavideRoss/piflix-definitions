import { ISeason } from 'defs/interfaces/season.interface';
import { IShow } from 'defs/interfaces/show.interface';

export interface IEpisode {
    remoteId: number;
    name: string;
    number: number;
    date: Date;
    runTime: number;
    summary: string;
    image: string;

    file: string;
    alias: string;

    show: IShow;
    season: ISeason;
}
