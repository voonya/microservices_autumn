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

const countTest = 3;
const route = 'http://localhost:80/api/file-service/file/4b568892-9338-4c69-9dcd-dde183878727';
for (let i = 0; i < countTest; i++) {
    await test(route, 20);
}
