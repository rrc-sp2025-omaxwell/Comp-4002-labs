export type Manager = {
    name: string;
    title: string;
    pronouns?: string;
}

export type ManagementRole = {
    [role: string]: Manager[];
}
