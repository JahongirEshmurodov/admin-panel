import { dataProvider } from "./dataProvider";
import jsonServerProvider from "ra-data-json-server";

// export const dataProvider = jsonServerProvider(
//   import.meta.env.VITE_JSON_SERVER_attached_URL,
// );

// Login va parolni base64 qilib qo‘shamiz
const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;
const basicAuth = btoa(`${username}:${password}`);

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  options.headers.set("Authorization", `Basic ${basicAuth}`);

  const urlObj = new URL(url);
  urlObj.searchParams.set("id", "816");

  return fetch(urlObj, options).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export const baseDataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
  httpClient,
);

export const dataProvider = {
  ...baseDataProvider,

  // faqat getList misol tariqasida:
  getList: async (resource, params) => {
    const result = await httpClient(
      `${import.meta.env.VITE_JSON_SERVER_URL}/${resource}`,
      {},
    );
    return {
      // bu yerda `.data` - API dan qaytgan `data` maydon
      data: result.data,
      total: result.data.length, // yoki agar total bo‘lsa: response.data.total
    };
  },

  // boshqa metodlar uchun ham xuddi shu tarzda kerak bo‘lsa override qilinadi
};
