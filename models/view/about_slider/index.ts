import {Jsonable} from "@shared/models/tools/tools";

export class AboutCard extends Jsonable<AboutCard>() {
  img: string
  title: string
  text: string
}
