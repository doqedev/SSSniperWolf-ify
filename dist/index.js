"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sniperwolfify = exports.ImageType = void 0;
const jimp_1 = __importDefault(require("jimp"));
const path = __importStar(require("path"));
var ImageType;
(function (ImageType) {
    ImageType[ImageType["Confused1"] = 1] = "Confused1";
    ImageType[ImageType["Suprised1"] = 2] = "Suprised1";
    ImageType[ImageType["Neutral1"] = 3] = "Neutral1";
    ImageType[ImageType["Suprised2"] = 4] = "Suprised2";
    ImageType[ImageType["Neutral2"] = 5] = "Neutral2";
    ImageType[ImageType["Suprised3"] = 6] = "Suprised3";
    ImageType[ImageType["ReallyConcerned1"] = 7] = "ReallyConcerned1";
    ImageType[ImageType["Devious"] = 8] = "Devious";
    ImageType[ImageType["ReallyConcerned2"] = 9] = "ReallyConcerned2";
    ImageType[ImageType["Crying"] = 10] = "Crying";
    ImageType[ImageType["Mugshot"] = 420] = "Mugshot";
})(ImageType || (exports.ImageType = ImageType = {}));
async function sniperwolfify(backgroundImagePath, ImageType) {
    try {
        const randomImageNumber = ImageType || Math.floor(Math.random() * 10) + 1;
        let imageFile = `${randomImageNumber}.png`;
        if (randomImageNumber === 420)
            imageFile = `mugshot.png`;
        const overlayImagePath = path.join(__dirname, "../images", imageFile);
        const backgroundImage = await jimp_1.default.read(backgroundImagePath);
        const overlayImage = await jimp_1.default.read(overlayImagePath);
        backgroundImage.resize(976, 720);
        const combinedImage = new jimp_1.default(1280, 720);
        combinedImage.composite(backgroundImage, 0, 0);
        combinedImage.composite(overlayImage, 0, 0);
        return combinedImage;
    }
    catch (err) {
        throw err;
    }
}
exports.sniperwolfify = sniperwolfify;
