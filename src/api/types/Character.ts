export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin?: object;
    location?: object;
    image: string;
    url: string
    episode?: string[];
    created: string;
}