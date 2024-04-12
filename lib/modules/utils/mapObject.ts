export default function mapObject<T> (obj: any, map: (key: string, value: any) => T): T {
    const result: any = {};

    for (const key in obj) {
        result[key] = map(key, obj[key]);
    }

    return result;
}