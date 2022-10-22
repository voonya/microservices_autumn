import { useRef } from 'react';
import './App.css';

function ScheduleService() {
    const responseDiv = useRef<HTMLDivElement>(null);
    const getScheduleIdInput1 = useRef<HTMLInputElement>(null);
    const getScheduleIdInput2 = useRef<HTMLInputElement>(null);
    const getScheduleIdInput3 = useRef<HTMLInputElement>(null);
    const createScheduleIdInput = useRef<HTMLInputElement>(null);
    const updateScheduleIdInput = useRef<HTMLInputElement>(null);
    const updateScheduleYearInput = useRef<HTMLInputElement>(null);
    const deleteScheduleIdInput = useRef<HTMLInputElement>(null);

    const makeRequest = (route: string, options?: Record<string, unknown>) => {
        fetch(route, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setResponse(JSON.stringify(data, null, 4))
            }).catch((err) => {
                console.error(err);
            });
    }
    const setResponse = (response: string) => {
        if (responseDiv.current) {
            responseDiv.current.innerHTML = `<pre>${response}</pre>`;
        }
    }
    const getScheduleHandler = () => {
        console.log('herer')
        if (!getScheduleIdInput1.current?.value) {
            return;
        }

        console.log('ger')
        makeRequest(`/api/schedule/${getScheduleIdInput1.current.value}`);
    }

    const getScheduleSlotHandler = () => {
        if (!getScheduleIdInput2.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/scheduleslot/${getScheduleIdInput2.current.value}`);
    }

    const getSlotHandler = () => {
        if (!getScheduleIdInput3.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/slot/${getScheduleIdInput3.current.value}`);
    }


    const createScheduleHandler = () => {
        if (!createScheduleIdInput.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/`, {
            'method': "POST",
            "headers": {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year: createScheduleIdInput.current.value })
        });
    }

    const updateScheduleHandler = () => {
        if (!updateScheduleIdInput.current?.value || !updateScheduleYearInput.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/${updateScheduleIdInput.current.value}`, {
            'method': "PUT",
            "headers": {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year: updateScheduleYearInput.current.value })
        });
    }

    const deleteScheduleHandler = () => {
        if (!deleteScheduleIdInput.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/${deleteScheduleIdInput.current.value}`, { 'method': "DELETE" });
    }



    return (
        <div className="App">
            <div className='response-container'>
                <h2>Response: </h2>
                <div ref={responseDiv}></div>
            </div>
            <section className='service-container'>
                <h2>Schedule service:</h2>
                <div>
                    <h3>Get Schedule</h3>
                    <div>
                        <span>GET</span>
                        <span>/api/schedule/file/:id</span>
                        <input type='text' ref={getScheduleIdInput1}></input>
                        <button onClick={getScheduleHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Get ScheduleSlot</h3>
                    <div>
                        <span>GET</span>
                        <span>/api/schedule/scheduleslot/:id</span>
                        <input type='text' ref={getScheduleIdInput2}></input>
                        <button onClick={getScheduleSlotHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Get Slot</h3>
                    <div>
                        <span>GET</span>
                        <span>/api/schedule/schedule/:id</span>
                        <input type='text' ref={getScheduleIdInput3}></input>
                        <button onClick={getSlotHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Create Schedule</h3>
                    <div>
                        <span>POST</span>
                        <span>/api/schedule/</span>
                        <input type="inut" ref={createScheduleIdInput} />
                        <button onClick={createScheduleHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Update Schedule</h3>
                    <div>
                        <span>PUT</span>
                        <span>/api/schedule/:id</span>
                        <input type="text" ref={updateScheduleIdInput} />
                        <span>year</span>
                        <input type="text" ref={updateScheduleYearInput} />
                        <button onClick={updateScheduleHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Delete Schedule</h3>
                    <div>
                        <span>PUT</span>
                        <span>/api/schedule/:id</span>
                        <input type="text" ref={deleteScheduleIdInput} />
                        <button onClick={deleteScheduleHandler}>Send</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ScheduleService