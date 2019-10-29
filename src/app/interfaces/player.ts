import {Countries, SquadNumber} from "../global/variables";

export interface Player {
  $key?: string;
  name: string;
  lastName: string;
  position: SquadNumber;
  weight: number;
  height: number;
  nationality: Countries;
  leftFooted: boolean;
}
