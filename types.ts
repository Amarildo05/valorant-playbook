export interface GameDescription {
  text: string;
}

export interface GameData {
  title: string;
  description: GameDescription[];
  videoUrl: string;
  backgroundVideo: string;
}