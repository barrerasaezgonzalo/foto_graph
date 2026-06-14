export interface PhotoCardProps {
  imageSrc: string;
  title: string;
  onClick: () => void;
}

export interface Photo {
  id: number;
  url: string;
  title: string;
}
