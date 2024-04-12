import { Movie } from "../../../domain/entities/Movie";
import { MovieService } from "../../../domain/services/MovieService";

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
  const movieService = new MovieService();
  it("should return a list of movies with comments", async () => {
    const result = await movieService.getAllMovies();
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
  });
});
