# hk-stock-api

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/hk_stock_api/mod.ts)

get hk stock information in deno

```ts
// pick 1 to import
import * as stock from "https://deno.land/x/hk_stock_api/mod.ts";
import * as stock from "https://denopkg.com/yeukfei02/hk-stock-api/mod.ts";
```

## getHKStockByCode

```ts
const code = "00005";

const result = await stock.getHKStockByCode(code);

// startDate and endDate are optional
const startDate = "2019-05-01";
const endDate = "2019-05-10";

const result = await stock.getHKStockByCode(code, startDate, endDate);

// result
{
    "dataset": {
        "id": 10048331,
        "dataset_code": "00005",
        "database_code": "HKEX",
        "name": "Hsbc Holdings (00005)",
        "description": "Stock Prices for Hsbc Holdings from the Hong Kong Stock Exchange. Currency: HKD",
        "refreshed_at": "2020-05-29T14:00:31.930Z",
        "newest_available_date": "2020-05-29",
        "oldest_available_date": "2014-02-21",
        "column_names": [
            "Date",
            "Nominal Price",
            "Net Change",
            "Change (%)",
            "Bid",
            "Ask",
            "P/E(x)",
            "High",
            "Low",
            "Previous Close",
            "Share Volume (000)",
            "Turnover (000)",
            "Lot Size"
        ],
        "frequency": "daily",
        "type": "Time Series",
        "premium": false,
        "limit": null,
        "transform": null,
        "column_index": null,
        "start_date": "2019-05-01",
        "end_date": "2019-05-10",
        "data": [
            [
                "2019-05-10",
                66.9,
                null,
                null,
                66.9,
                67.0,
                null,
                67.45,
                66.1,
                66.45,
                20761.0,
                1390392.0,
                null
            ],
            [
                "2019-05-09",
                66.45,
                null,
                null,
                66.45,
                66.5,
                null,
                67.45,
                66.4,
                67.45,
                21447.0,
                1429970.0,
                null
            ],
            ...
        ],
        "collapse": null,
        "order": null,
        "database_id": 5895
    }
}
```

## getHKIndexFutureByIndexCodeAndDate

### indexCode

| INDEX NAME                                   | INDEX CODE |
| -------------------------------------------- | :--------: |
| CES China 120 Index Futures                  |    CHH     |
| Hang Seng Index Futures (Night Session)      |    HSIN    |
| Hang Seng Index Futures                      |    HSI     |
| HSCEI Dividend Futures                       |    DHH     |
| HSI Dividend Futures                         |    DHS     |
| HSI Volatility Index Futures                 |    VHS     |
| Mini-Hang Seng Index Futures (Night Session) |    MHIN    |
| Mini-Hang Seng Index Futures                 |    MHI     |
| US Dollar vs Renminbi (Hong Kong) (USD/CNH)  |    CUS     |

```ts
const indexCode = "HSI";
const month = "jan";
const year = "2019";

const result = await stock.getHKIndexFutureByIndexCodeAndDate(indexCode, month, year);

// startDate and endDate are optional
const startDate = "2019-01-01";
const endDate = "2019-01-05";

const result = await stock.getHKIndexFutureByIndexCodeAndDate(indexCode, month, year, startDate, endDate);

// result
{
    "dataset": {
        "id": 45267585,
        "dataset_code": "HSIF2019",
        "database_code": "HKEX",
        "name": "Hang Seng Index Futures, January 2019 (HSIF2019)",
        "description": "Historical Hong Kong Futures Prices: Hang Seng Index Futures, January 2019 (HSIF2019).",
        "refreshed_at": "2019-01-31T15:01:32.276Z",
        "newest_available_date": "2019-01-31",
        "oldest_available_date": "2018-11-30",
        "column_names": [
            "Date",
            "Open",
            "Bid",
            "Ask",
            "Last Traded",
            "High",
            "Low",
            "Volume",
            "Prev. Day Settlement Price",
            "Net Change",
            "Prev. Day Open Interest"
        ],
        "frequency": "daily",
        "type": "Time Series",
        "premium": false,
        "limit": null,
        "transform": null,
        "column_index": null,
        "start_date": "2019-01-01",
        "end_date": "2019-01-05",
        "data": [
            [
                "2019-01-04",
                24920.0,
                null,
                null,
                null,
                25659.0,
                24893.0,
                205600.0,
                25601.0,
                545.0,
                116457.0
            ],
            [
                "2019-01-03",
                25056.0,
                null,
                null,
                null,
                25238.0,
                24876.0,
                178844.0,
                25056.0,
                81.0,
                119265.0
            ],
            ...
        ],
        "collapse": null,
        "order": null,
        "database_id": 5895
    }
}
```

## Related

[hk-stock-cli](https://github.com/yeukfei02/hk-stock-cli)
