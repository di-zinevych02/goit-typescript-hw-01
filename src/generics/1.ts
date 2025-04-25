import axios from 'axios';
//<T> — це Generic, тобто кажемо TypeScript: “тип даних, які повертаються з функції, буде визначено пізніше”.

//url: string — параметр url має тип рядок.

//Promise<T> — функція повертає проміс, який після виконання поверне об'єкт типу T (дані з API).

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
//axios.get<T>(...) — тут ми також передаємо generic T, щоб TypeScript знав, якого типу буде response.data.