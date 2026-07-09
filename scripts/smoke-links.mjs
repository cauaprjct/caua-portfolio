/**
 * Fase 0 — smoke test de links externos do portfólio.
 * Lê URLs de src/config/data.ts por regex (sem importar React/TS).
 * Uso: node scripts/smoke-links.mjs
 */
import fs from "fs";
import path from "path";

const dataPath = path.resolve("src/config/data.ts");
const src = fs.readFileSync(dataPath, "utf8");

const found = src.match(/https?:\/\/[^\s"'`)]+/g) || [];
const urls = [
  ...new Set(
    found
      .map((u) => u.replace(/[.,;]+$/, ""))
      // ignora pedaços de template string no fonte (ex.: wa.me/${...})
      .filter((u) => !u.includes("${") && !u.includes("`"))
  ),
];

// Canônicos extras (WhatsApp real + produção + LinkedIn)
urls.push(
  "https://portifolio-caua.vercel.app",
  "https://www.linkedin.com/in/cau%C3%A3-alves-0975a129b/",
  "https://wa.me/5521970998386"
);

const unique = [...new Set(urls)];
const results = [];

for (const url of unique) {
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { "user-agent": "portfolio-smoke/1.0" },
      signal: AbortSignal.timeout(20000),
    });
    // LinkedIn e alguns hosts bloqueiam bots com 999/403 — tratar com nuance
    const softOk =
      res.ok ||
      res.status === 999 ||
      (url.includes("linkedin.com") && [401, 403, 999].includes(res.status));
    results.push({ url, status: res.status, ok: softOk });
  } catch (err) {
    results.push({
      url,
      status: 0,
      ok: false,
      error: String(err.message || err),
    });
  }
}

const failed = results.filter((r) => !r.ok);
for (const r of results.sort((a, b) => a.url.localeCompare(b.url))) {
  const mark = r.ok ? "OK  " : "FAIL";
  console.log(
    `${mark} ${String(r.status || "ERR").padStart(3)} ${r.url}${r.error ? " — " + r.error : ""}`
  );
}

console.log(`\n${results.length - failed.length}/${results.length} ok`);
if (failed.length) {
  console.error("\nFalhas:");
  for (const f of failed) console.error(" -", f.url, f.error || f.status);
  process.exitCode = 1;
}
