#! /usr/bin/env node
import heading from "./Components/heading.js";
import welcome from "./Components/welcome.js";
import main from "./Components/main.js";

await heading();
 setTimeout(welcome, 1000);
 setTimeout(main,2000);

