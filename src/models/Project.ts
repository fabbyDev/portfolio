export type Project = {
    title: string;
    business: string;
    description: string;
    technologies: Array<string>;
    imagePath: string;
    url: string;
    ignoreDefaultHeight?: boolean;
}