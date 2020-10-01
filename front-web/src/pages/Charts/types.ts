import { Platform } from "../Records/types";

export type Game = {
    id: number;
    title: string;
    plataform: Platform;
}

export type ChartItem = {
    x: string;
    y: number;
}