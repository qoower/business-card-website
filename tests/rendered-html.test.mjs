import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders Viktor Popov's business card", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Виктор Попов/);
  assert.match(html, /Кандидат физико-математических наук/);
  assert.match(html, /qoowere4\.beget\.tech/);
  assert.match(html, /ОБО МНЕ/);
  assert.doesNotMatch(html, /IVA Technologies|Воейкова|Главный инженер-разработчик/);
  assert.doesNotMatch(html, /codex-preview/);
});
