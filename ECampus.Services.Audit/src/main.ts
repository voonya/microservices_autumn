import { IAuthData, IFileData, IScheduleData, IProfileData } from "types";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'logger-service',
    brokers: ['kafka:9092'],
    connectionTimeout: 100000,
    retry: {
        retries: 10
    }
})

const consumer = kafka.consumer({ groupId: "logger" });

const main = async () => {
    await consumer.connect().then(() => console.log('Logger service connected!'))


    await consumer.subscribe({ topic: 'auth' })
    await consumer.subscribe({ topic: 'profile' })
    await consumer.subscribe({ topic: 'schedule' })
    await consumer.subscribe({ topic: 'file' })

    await consumer.run({
        eachMessage: async ({ topic, message }) => {
            const data = JSON.parse(message.value.toString());
            if (topic == 'auth') {
                processAuthMessage(data);
            }
            else if (topic == 'schedule') {
                processScheduleMessage(data)
            }
            else if (topic == 'profile') {
                processProfileMessage(data)
            }
            else if (topic == 'file') {
                processFileMessage(data)
            }
        },
    })
}

function processAuthMessage(data: IAuthData) {
    console.log(`[${new Date().toISOString()}] AUTH: -> USER: ${JSON.stringify(data.data)} SUCCESSFULLY ${data.event} AT ${data.date}`);
}

function processFileMessage(data: IFileData) {
    console.log(`[${new Date().toISOString()}] FILE: -> FILE: ${JSON.stringify(data.data)} SUCCESSFULLY ${data.event} AT ${new Date(data.date).toISOString()}`);
}

function processProfileMessage(data: IProfileData) {
    console.log(`[${new Date().toISOString()}] PROFILE: -> PROFILE: ${JSON.stringify(data.data)} SUCCESSFULLY ${data.event} AT ${new Date(data.date).toISOString()}`);
}

function processScheduleMessage(data: IScheduleData) {
    console.log(`[${new Date().toISOString()}] SCHEDULE: -> SCHEDULE: ${JSON.stringify(data.data)} SUCCESSFULLY ${data.event} AT ${new Date(data.date).toISOString()}`);
}

main();