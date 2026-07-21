import type { ComponentType } from "react";

export type SectionDisplayCardProps = {
  Icon: ComponentType;
  title: string;
  description: string;
  cardType?: string; //Make card type optional so you dont have to add cardType property and value on every card data object
};
