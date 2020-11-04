import {
  getHKIndexFutureByIndexCodeAndDate,
  getHKStockByCode,
} from "../src/main.ts";
import { assert } from "../deps.ts";

Deno.test("getHKStockByCode", async () => {
  const code = "00005";

  const result = await getHKStockByCode(code);
  assert(result);
  assert(result.dataset);
  assert(result.dataset.id);
  assert(result.dataset.name);
  assert(result.dataset.description);
  assert(result.dataset.column_names);
  assert(result.dataset.start_date);
  assert(result.dataset.end_date);
  assert(result.dataset.data);
});

Deno.test("getHKStockByCodeWithStartDateAndEndDate", async () => {
  const code = "00005";
  const startDate = "2019-05-01";
  const endDate = "2019-05-10";

  const result = await getHKStockByCode(code, startDate, endDate);
  assert(result);
  assert(result.dataset);
  assert(result.dataset.id);
  assert(result.dataset.name);
  assert(result.dataset.description);
  assert(result.dataset.column_names);
  assert(result.dataset.start_date);
  assert(result.dataset.end_date);
  assert(result.dataset.data);
});

Deno.test("getHKIndexFutureByIndexCodeAndDate", async () => {
  const indexCode = "HSI";
  const month = "may";
  const year = "2020";

  const result = await getHKIndexFutureByIndexCodeAndDate(
    indexCode,
    month,
    year,
  );
  assert(result);
  assert(result.dataset);
  assert(result.dataset.id);
  assert(result.dataset.name);
  assert(result.dataset.description);
  assert(result.dataset.column_names);
  assert(result.dataset.start_date);
  assert(result.dataset.end_date);
  assert(result.dataset.data);
});

Deno.test("getHKIndexFutureByIndexCodeAndDateWithStateDateAndEndDate", async () => {
  const indexCode = "HSI";
  const month = "may";
  const year = "2020";
  const startDate = "2020-05-01";
  const endDate = "2020-05-05";

  const result = await getHKIndexFutureByIndexCodeAndDate(
    indexCode,
    month,
    year,
    startDate,
    endDate,
  );
  assert(result);
  assert(result.dataset);
  assert(result.dataset.id);
  assert(result.dataset.name);
  assert(result.dataset.description);
  assert(result.dataset.column_names);
  assert(result.dataset.start_date);
  assert(result.dataset.end_date);
  assert(result.dataset.data);
});
