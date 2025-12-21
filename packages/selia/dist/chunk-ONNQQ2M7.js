// src/lib/clean-build.ts
import fs from "fs/promises";
async function cleanBuild(output) {
  await fs.rm(output, { recursive: true, force: true }).catch(() => {
  });
  await fs.mkdir(output, { recursive: true }).catch(() => {
  });
}

export {
  cleanBuild
};
//# sourceMappingURL=chunk-ONNQQ2M7.js.map