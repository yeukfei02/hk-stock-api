const ROOT_URL = `https://www.quandl.com/api/v3/datasets/HKEX`;
const API_KEY = `HUKT8LMin4bVdH14jz4N`;

export async function getHKStockByCode(
  code: string,
  startDate?: string,
  endDate?: string,
) {
  let responseJSON = null;

  let params = {
    api_key: API_KEY,
  };
  if (startDate) {
    const obj = {
      start_date: startDate,
    };
    params = Object.assign(params, obj);
  }
  if (endDate) {
    const obj = {
      end_date: endDate,
    };
    params = Object.assign(params, obj);
  }
  const queryString = new URLSearchParams(params).toString();

  const response = await fetch(
    `${ROOT_URL}/${code}?${queryString}`,
  );

  if (response) {
    responseJSON = await response.json();
  }

  return responseJSON;
}

export async function getHKIndexFutureByIndexCodeAndDate(
  indexCode: string,
  month: string,
  year: string,
  startDate?: string,
  endDate?: string,
) {
  let responseJSON = null;

  let params = {
    api_key: API_KEY,
  };
  if (startDate) {
    const obj = {
      start_date: startDate,
    };
    params = Object.assign(params, obj);
  }
  if (endDate) {
    const obj = {
      end_date: endDate,
    };
    params = Object.assign(params, obj);
  }
  const queryString = new URLSearchParams(params).toString();

  let dateFormat = "";
  if (month && year) {
    const formattedMonth = await getMonth(month);
    dateFormat = `${formattedMonth}${year}`;
  }

  const response = await fetch(
    `${ROOT_URL}/${indexCode}${dateFormat}?${queryString}`,
  );

  if (response) {
    responseJSON = await response.json();
  }

  return responseJSON;
}

async function getMonth(monthStr: string) {
  let result = "";

  const data: any = {
    jan: "F",
    feb: "G",
    mar: "H",
    apr: "J",
    may: "K",
    jun: "M",
    jul: "N",
    aug: "Q",
    sep: "U",
    oct: "V",
    nov: "X",
    dec: "Z",
  };

  if (monthStr) {
    monthStr = monthStr.toLowerCase();
    result = data[monthStr];
  }

  return result;
}
