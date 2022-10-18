export interface IDiceImg{
  url: string,
}

export interface IDices {
  postureDice: IDiceImg[];
  mainColorDice: IDiceImg[];
  secColorDice: IDiceImg[];
}

export interface IActiveDices {
  postureDice: string;
  mainColorDice: string;
  secColorDice: string;
}