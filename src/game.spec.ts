import { Game } from './game'

describe('Game', () => {
  describe('score', () => {
    let game: Game
    const server = 'Player 1'
    const receiver = 'Player 2'

    beforeEach(() => {
      game = new Game(server, receiver)
    })

    describe('When server has 3 points and receiver has 2 points', () => {
      it("should return 'Forty, Fifteen'", () => {
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)

        game.pointTo(receiver)
        game.pointTo(receiver)

        expect(game.score()).toEqual('Forty, Thirty')
      })
    })

    describe('When server has 0 points and receiver has 1 point', () => {
      it("should return 'Love, Fifteen'", () => {
        game.pointTo(receiver)

        expect(game.score()).toEqual('Love, Fifteen')
      })
    })

    describe('When both players have at least three points and scores are equal', () => {
      it("should return 'Duece'", () => {
        game.pointTo(receiver)
        game.pointTo(receiver)
        game.pointTo(receiver)

        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)

        expect(game.score()).toEqual('Deuce')
      })
    })

    describe('When both players have at least three points but player 1 has one more point that the other', () => {
      it("should return 'Advantage Player 1'", () => {
        game.pointTo(receiver)
        game.pointTo(receiver)
        game.pointTo(receiver)

        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)

        expect(game.score()).toEqual('Advantage Player 1')
      })
    })

    describe('When the server has four points and two or more points than the other player', () => {
      it("should return 'Game, Player 2'", () => {
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)

        game.pointTo(receiver)
        game.pointTo(receiver)

        expect(game.score()).toEqual('Game, Player 2')
      })
    })
  })
})
