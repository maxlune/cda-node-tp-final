"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MovieService_1 = require("../../../domain/services/MovieService");
describe("testing the getAllMovies method", () => {
    const movieService = new MovieService_1.MovieService();
    let mockedMovies = [
        {
            id: "1",
            title: "Inception",
            year: 2010,
        },
        {
            id: "2",
            title: "Le Seigneur des anneaux : La Communauté de l'anneau",
            year: 2001,
        },
        {
            id: "3",
            title: "Interstellar",
            year: 2014,
        },
    ];
    it("should return a list of movies", () => {
        const result = movieService.getAllMovies();
        const expected = mockedMovies;
        expect(result).toEqual(expected);
    });
});
