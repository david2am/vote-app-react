export default interface Props {
  onSubmit: (vote: boolean) => void;
  className: string;
  label: string;
  category: string;
  lastUpdated: string;
}