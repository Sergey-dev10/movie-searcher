export const getNameOfGenreFromURL = (url: string) => {
    const genre = url.split("-").join(" ");
    return genre[0].toUpperCase() + genre.slice(1);
};