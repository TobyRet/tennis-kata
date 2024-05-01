import { Player, Score } from './types'

export class Game {
  private readonly points: Record<Player, number>;
  constructor() {
    this.points = {
      [Player.SERVER]: 0,
      [Player.RECEIVER]: 0
    }
  }

  public pointTo(player: Player) {
    this.points[player]++
  }

  public score() {
    if(this.isWinner()) {
      const playerWithMostPoints = this.points[Player.SERVER] > this.points[Player.RECEIVER] ? Player.SERVER : Player.RECEIVER
      return playerWithMostPoints === Player.SERVER ? `${Score.GAME}, ${Player.RECEIVER}` : `${Player.SERVER}, ${Score.GAME}`
    }

    if(this.isDuece()) {
      return Score.DEUCE
    }

    if(this.isAdvantage()) {
      const advPlayer = this.points[Player.SERVER] > this.points[Player.RECEIVER] ? Player.SERVER : Player.RECEIVER
      return `${Score.ADVANTAGE} ${advPlayer}`
    }

    const mappedScore= Object.fromEntries(
      Object.entries(this.points).map((pair) => [pair[0], this.mapScore(pair[1])])
    )

    return `${mappedScore[Player.SERVER]}, ${mappedScore[Player.RECEIVER]}`
  }

  public isAdvantage() {
    const pointValues = Object.values(this.points)
    return pointValues.every((num) => num >= 3) && Math.abs(pointValues[0] - pointValues[1]) === 1
  }

  private isDuece() {
    const pointValues = Object.values(this.points)
    return pointValues.every((num) => num >= 3) && pointValues[0] === pointValues[1]
  }

  private isWinner() {
    const pointValues = Object.values(this.points)
    return pointValues.find((p) => p === 4) && Math.abs(pointValues[0] - pointValues[1]) === 2
  }

  private mapScore(points: number) {
    return {
      0: Score.LOVE,
      1: Score.FIFTEEN,
      2: Score.THIRTY,
      3: Score.FORTY
    }[points]
  }
}
