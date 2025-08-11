import { EremiaTheme } from "./OneColumn/Eremia";
import { TerraTheme } from "./OneColumn/Terra";
import { OrionTheme } from "./TwoColumns/orion";

export const Themes = {
  oneColumn: [
    { name: "Terra", sections: TerraTheme },
    { name: "Eremia", sections: EremiaTheme },
  ],
  twoColumn: [{ name: "Orion", sections: OrionTheme }],
};
