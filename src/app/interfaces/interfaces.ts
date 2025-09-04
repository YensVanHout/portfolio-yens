export interface portfolioItemProps {
  title: string;
  img: {
    imgUrl: string;
    alt: string;
  };
  stack: Array<string>;
  links: {
    website?: string;
    github?: string;
  };
}

export interface timelineProps {
  year: string;
  duration: string;
  title: string;
  details: string;
}

export interface titleProps {
  children?: any;
  styling?: string;
}
