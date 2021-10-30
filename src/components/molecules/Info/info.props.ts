export default interface Props {
  name: string;
  description: string;
  category: string;
  lastUpdated: string;
  votes: { positive: number; negative: number; }
}