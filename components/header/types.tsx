interface IHeaderProps {
  links: {
    name: string;
    text: string;
    active: boolean;
    callback?: () => void;
    href?: string;
  }[];
  renderLinkAs: 'a' | 'span';
}

export type { IHeaderProps };
