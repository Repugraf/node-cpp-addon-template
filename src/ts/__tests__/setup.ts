import { execSync } from "child_process";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

// Ensure the native addon is built before running tests
const addonPath = join(__dirname, "../../../build/Release/native_addon.node");

if (!existsSync(addonPath)) {
  console.log("Building native addon...");
  execSync("npm run build", { stdio: "inherit" });

  // Verify the addon exists after build
  if (!existsSync(addonPath)) {
    const buildDir = join(__dirname, "../../../build/Release");
    console.error("Build output directory contents:", readdirSync(buildDir));
    throw new Error(`Native addon not found at ${addonPath} after build`);
  }
}
