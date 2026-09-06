import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const nested = join("dist/client", "gan-xu-wu-yun");
if (!existsSync(nested)) {
  process.exit(0);
}

cpSync(nested, "dist/client", { recursive: true });
rmSync(nested, { recursive: true, force: true });
console.log("flattened dist/client/gan-xu-wu-yun into dist/client");
