import { Game } from './game'
import { Player, Score } from './types'

describe('Game', () => {
  describe('score', () => {
    let game: Game
    const server = Player.SERVER
    const receiver = Player.RECEIVER

    beforeEach(() => {
      game = new Game()
    })

    describe('When server has 3 points and receiver has 2 points', () => {
      it("should return 'Forty, Fifteen'", () => {
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)

        game.pointTo(receiver)
        game.pointTo(receiver)

        expect(game.score()).toEqual(`${Score.FORTY}, ${Score.THIRTY}`)
      })
    })

    describe('When server has 0 points and receiver has 1 point', () => {
      it("should return 'Love, Fifteen'", () => {
        game.pointTo(receiver)

        expect(game.score()).toEqual(`${Score.LOVE}, ${Score.FIFTEEN}`)
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

        expect(game.score()).toEqual(Score.DEUCE)
      })
    })

    describe('When both players have at least three points but player 1 has one more point that the other', () => {
      it("should return 'Advantage Server'", () => {
        game.pointTo(receiver)
        game.pointTo(receiver)
        game.pointTo(receiver)

        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)

        expect(game.score()).toEqual(`${Score.ADVANTAGE} ${Player.SERVER}`)
      })
    })

    describe('When the server has four points and two or more points than the other player', () => {
      it("should return 'Game, Receiver'", () => {
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)
        game.pointTo(server)

        game.pointTo(receiver)
        game.pointTo(receiver)

        expect(game.score()).toEqual(`${Score.GAME}, ${Player.RECEIVER}`)
      })
    })
  })
})
