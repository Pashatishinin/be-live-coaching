export interface ImageAsset {
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

export interface HeroData {
  title_ua?: string;
  title_en?: string;
  title_de?: string;
  img?: ImageAsset | null;
}
