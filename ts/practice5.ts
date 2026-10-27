// 高度な型の練習

type Novel = {
    authors: string;
    title: string;
};
type Manga = {
    name: string;
    numberOfVolumes: number;
};
type Book = Novel | Manga;

type Animal = {
    species: string;
    age: Number
}

type Human = Animal & {
    name: string;
}