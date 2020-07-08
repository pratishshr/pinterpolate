type anyObject = {
    [key: string]: any,
};

export default function interpolate(str: string, params: anyObject): string;
