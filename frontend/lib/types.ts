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

export type HeroWithUrls = Omit<HeroData, "img"> & {
  imageUrl: string | null;
};

export interface ProblemContent {
  title: string;
  desc: string;
}

export interface ProblemData {
  problemIcon?: string;
  arrowIcon?: string;
  problem_content_ua?: ProblemContent;
  problem_content_en?: ProblemContent;
  problem_content_de?: ProblemContent;
  solution_content_ua?: ProblemContent;
  solution_content_en?: ProblemContent;
  solution_content_de?: ProblemContent;
}
