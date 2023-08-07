type origin = {
    name: string;
    url: string;
}

type location = {
    name: string;
    url: string;
}

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin?: origin;
    location?: location;
    image: string;
    url: string
    episode?: string[];
    created: string;
}