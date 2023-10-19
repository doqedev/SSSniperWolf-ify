import Jimp from 'jimp'
import * as path from 'path'

export enum ImageType {
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

export async function sniperwolfify(backgroundImagePath: string, ImageType?: ImageType): Promise<Jimp> {
    try {

        const randomImageNumber = ImageType || Math.floor(Math.random() * 10) + 1;
        let imageFile = `${randomImageNumber}.png`
        if (randomImageNumber === 420) imageFile = `mugshot.png`;
        const overlayImagePath = path.join(__dirname, "../images", imageFile);

        const backgroundImage = await Jimp.read(backgroundImagePath)
        const overlayImage = await Jimp.read(overlayImagePath)

        backgroundImage.resize(976, 720)

        const combinedImage = new Jimp(1280, 720)

        combinedImage.composite(backgroundImage, 0, 0);
        combinedImage.composite(overlayImage, 0, 0);

        return combinedImage
    } catch (err) {
        throw err;
    }
}