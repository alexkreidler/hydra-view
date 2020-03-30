import { createConnectedStore } from "undux";
import { IApiDocumentation } from "@hydra-cg/heracles.ts";

export interface IStore {
  url: string;
  response: any;
  docs?: IApiDocumentation;
}

const blankStore: IStore = {
  url: "https://www.markus-lanthaler.com/hydra/event-api/",
  response: "",
  docs: undefined
};

// Create a store with an initial value.
export default createConnectedStore(blankStore);
