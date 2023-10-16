export interface PeopleState {
    people: People | null;
}

export interface People {
    results: Person[];
    total_pages: number;
    total_results: number;
}
export interface Person {
    id: number;
    name: string;
    profile_path: string;
}