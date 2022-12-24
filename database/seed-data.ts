
interface SeedData {
    entries: SeedEntry[];
};

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}; 

export const seedData = {
    entries: [
        {
            description:
              "Pending: Enim ad aute nostrud incididunt culpa magna veniam esse ad.",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            description:
              "Progreso: Sunt qui dolore id ad cupidatat esse dolor ad amet cupidatat et ipsum nulla.",
            status: "in-progress",
            createdAt: Date.now() - 1000000,
        },
        {
            description:
              "Terminadas: Duis culpa occaecat consequat adipisicing eiusmod irure dolore laborum ad pariatur nulla nisi.",
            status: "finished",
            createdAt: Date.now() - 100000,
        },
    ]
};