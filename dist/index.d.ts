import Jimp from 'jimp';
export declare enum ImageType {
    Confused1 = 1,
    Suprised1 = 2,
    Neutral1 = 3,
    Suprised2 = 4,
    Neutral2 = 5,
    Suprised3 = 6,
    ReallyConcerned1 = 7,
    Devious = 8,
    ReallyConcerned2 = 9,
    Crying = 10,
    Mugshot = 420
}
export declare function sniperwolfify(backgroundImagePath: string, ImageType?: ImageType): Promise<Jimp>;
