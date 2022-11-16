import axios from "axios";

async function test(route, countRequests) {
    let failedAttempts = 0;
    const countAttempts = countRequests;

    let totalTime = 0;

    for (let i = 0; i < countAttempts; i++) {
        const start = performance.now();
        try {
            await axios.get(route);
        }
        catch (err) {
            if (err.response?.status >= 500) {
                failedAttempts++
            }
        }

        const end = performance.now();
        const inSeconds = (end - start) / 1000;
        totalTime += Number(inSeconds.toFixed(3));
    }

    console.log(`average duration: ${(totalTime / countAttempts).toFixed(3)}`);
    console.log(`${failedAttempts} from ${countAttempts} failed`);
    console.log();
}

console.log('Tests start!');

const countTest = 3;
const route = 'http://localhost:80/api/root-service/file-service/test';
for (let i = 0; i < countTest; i++) {
    await test(route, 30);
}
