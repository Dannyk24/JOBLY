import type { ComponentType } from "react";

export type SectionCardData = {
  Icon: ComponentType;
  title: string;
  description: string; //Serperates card data from additional meta data like card type
};
