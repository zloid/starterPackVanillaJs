import * as superZloid from "./scripts/superZloid.js";
import { app } from "./components/app.js";
import { createElement } from "./scripts/createElement.js";

createElement("div", "rootDiv", "", '', "#root");
app();

superZloid.dynamicsH1FromTitle();
