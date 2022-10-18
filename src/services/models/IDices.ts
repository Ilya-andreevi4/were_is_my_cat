export interface IDiceImg{
  url1: string,
  url2: string,
  url3: string,
}

export interface IDices {
  id: number;
  postureDice: IDiceImg;
  mainColorDice: IDiceImg;
  secColorDice: IDiceImg;
}