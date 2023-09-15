import { Image } from "@prisma/client";

export type ImageCreation = Omit<Image, 'id'>;

