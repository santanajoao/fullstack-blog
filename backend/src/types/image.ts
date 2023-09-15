import { Image } from "@prisma/client";

export type ImageCreation = Partial<Omit<Image, 'id'>>;

