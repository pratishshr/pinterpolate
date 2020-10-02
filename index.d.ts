export interface Params {
  [key: string]: string | number;
}

export interface Queries {
  [key: string]: string | number;
}

export default function interpolate(
  str: string,
  params: Params,
  queries?: Queries
): string;
