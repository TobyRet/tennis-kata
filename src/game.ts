export class Game {
  private readonly points: Record<string, number>
  private readonly server: string
  private readonly receiver: string
  constructor(server: string, receiver: string) {
    this.server = server
    this.receiver = receiver
    this.points = {}
    this.points[server] = 0
    this.points[receiver] = 0
  }

  public pointTo(player: string) {
    this.points[player] +=1
  }

  public score() {
    if(this.isWinner()) {
      const playerWithMostPoints = this.points[this.server] > this.points[this.receiver] ? this.server : this.receiver
      return playerWithMostPoints === this.server ? `Game, ${this.receiver}` : `${this.server}, Game`
    }

    if(this.isDuece()) {
      return 'Deuce'
    }

    if(this.isAdvantage()) {
      const playerWithMostPoints = this.points[this.server] > this.points[this.receiver] ? this.server : this.receiver
      return `Advantage ${playerWithMostPoints}`
    }

    const mappedScore= Object.fromEntries(
      Object.entries(this.points).map((pair) => [pair[0], this.mapScore(pair[1])])
    )

    return `${mappedScore[this.server]}, ${mappedScore[this.receiver]}`
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
      0: 'Love',
      1: 'Fifteen',
      2: 'Thirty',
      3: 'Forty'
    }[points]
  }
}
