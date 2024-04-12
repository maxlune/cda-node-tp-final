"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MovieService_1 = require("../../../domain/services/MovieService");
jest.mock("../../../domain/services/MovieService", () => {
    return {
        MovieService: jest.fn().mockImplementation(() => {
            return {
                getAllMovies: () => [
                    {
                        id: "1",
                        title: "Inception",
                        year: 2010,
                        comments: [
                            { id: "1", movieId: "1", content: "Bon film !" },
                            { id: "2", movieId: "1", content: "Top !" },
                        ],
                    },
                    {
                        id: "2",
                        title: "Le Seigneur des anneaux : La Communauté de l'anneau",
                        year: 2001,
                        comments: [{ id: "3", movieId: "2", content: "10/10 !" }],
                    },
                    {
                        id: "3",
                        title: "Interstellar",
                        year: 2014,
                        comments: [],
                    },
                ],
            };
        }),
    };
});
describe("testing the getAllMovies method", () => {
    const movieService = new MovieService_1.MovieService();
    it("should return a list of movies with comments", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield movieService.getAllMovies();
        expect(result).toEqual([
            {
                id: "1",
                title: "Inception",
                year: 2010,
                comments: [
                    { id: "1", movieId: "1", content: "Bon film !" },
                    { id: "2", movieId: "1", content: "Top !" },
                ],
            },
            {
                id: "2",
                title: "Le Seigneur des anneaux : La Communauté de l'anneau",
                year: 2001,
                comments: [{ id: "3", movieId: "2", content: "10/10 !" }],
            },
            {
                id: "3",
                title: "Interstellar",
                year: 2014,
                comments: [],
            },
        ]);
    }));
});
