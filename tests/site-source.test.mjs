import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the personal website with its essential content", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Виктор Попов/);
  assert.match(page, /Кандидат физико-математических наук/);
  assert.match(page, /qoowere4\.beget\.tech/);
  assert.match(page, /mailto:qoower\.popov@yandex\.ru/);
  assert.match(page, /https:\/\/t\.me\/qoower/);
  assert.doesNotMatch(page, /qoower@gmail\.com/);
  assert.doesNotMatch(page, /WEBRTC|работаю удалённо/);
  assert.match(page, /Мой сервис позволяет\s+увидеть многолетнюю климатическую статистику в удобном виде\./);
  assert.match(page, /02 \/ ОБО МНЕ/);
  assert.doesNotMatch(page, /IVA Technologies|Воейкова|Главный инженер-разработчик/);
  assert.match(layout, /Виктор Попов — разработчик и метеоролог/);
  await access(new URL("../public/viktor-popov-cutout.png", import.meta.url));
});
