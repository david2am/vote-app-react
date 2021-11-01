interface Character {
  id: number;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: { positive: number; negative: number; }
}

export type { Character }