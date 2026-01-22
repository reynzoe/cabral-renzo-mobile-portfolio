export interface Project {
    title: string;
    description: string;
    image: any;
    technologies?: string[];
    features?: string[];
    link?: string;
}


export interface Theme {
    background: string;
    card: string;
    text: string;
    subtext: string;
    accent: string;
    primary: string;
}