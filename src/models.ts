export interface Game {
  gameID: string;
  cheapest: string;
  thumb: string;
  external: string;
}

export interface Info {
  title: string;
  thumb: string;
}

export interface Deal {
  dealID: string;
  price: string;
  retailPrice: string;
  savings: number;
} 
