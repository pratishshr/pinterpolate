export interface Params {
    [key: string]: string | number;
}

export default function interpolate(str: string, params: Params): string;
