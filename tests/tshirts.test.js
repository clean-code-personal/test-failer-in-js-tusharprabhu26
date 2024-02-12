import { expect } from "chai";
import size from "../tshirts.js";

expect(size(37)).equals("S");
expect(size(40)).equals("M");
expect(size(43)).equals("L");
expect(size(38)).equals("S");
console.log("All is well (maybe!)");
