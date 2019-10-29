import { Player } from './player';
import {Countries} from "../global/variables";

export interface Team {
  $key?: string;
  name: string;
  country: Countries;
  players: Player[];
}
