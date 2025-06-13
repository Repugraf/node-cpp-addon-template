import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

// Ensure the native addon is built before running tests
const addonPath = join(__dirname, "../../../build/Release/native_addon.node");

if (!existsSync(addonPath)) {
  execSync("npm run build", { stdio: "inherit" });

  // Verify the addon exists after build
  if (!existsSync(addonPath)) {
    throw new Error(`Native addon not found at ${addonPath} after build`);
  }
}
