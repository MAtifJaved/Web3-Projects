#! /usr/bin/env node
import Heading from "./Components/Heading.js";
import welcome from "./Components/welcome.js";
import main from "./Components/main.js";


await Heading();
setTimeout(welcome, 1000);
setTimeout(main, 2000);

