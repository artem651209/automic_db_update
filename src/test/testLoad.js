import axios from 'axios';

const API_URL = 'http://localhost:3000/api/update-balance';
const REQUESTS = 10000;
let success = 0;
let failed = 0;

const testRequest = async () => {
    try {
        await axios.post(API_URL, { userId: 1, amount: -2 });
        success++;
    } catch (error) {
        failed++;
    }
};

const runTest = async () => {
    console.log(`Отправляем ${REQUESTS} запросов...`);

    const requests = Array.from({ length: REQUESTS }, () => testRequest());
    await Promise.all(requests);

    console.log(` Успешные: ${success}, Ошибки: ${failed}`);
};

runTest();

