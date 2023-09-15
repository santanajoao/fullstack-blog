import { Image } from "@prisma/client";

export type ImageCreation = Omit<Image, 'id'>;

export type ImageKey = {
  image: Image | null;
}