export const getNameOfGenreURL = (genre: string) => {
    return genre.split(" ").join("-").toLowerCase();
};