import { useRef } from 'react';
import './App.css';

function ScheduleService() {
    const responseDiv = useRef<HTMLDivElement>(null);
    const getScheduleIdInput1 = useRef<HTMLInputElement>(null);
    const getScheduleIdInput2 = useRef<HTMLInputElement>(null);
    const getScheduleIdInput3 = useRef<HTMLInputElement>(null);
    const createScheduleYearInput = useRef<HTMLInputElement>(null);
    const updateScheduleIdInput = useRef<HTMLInputElement>(null);
    const updateScheduleYearInput = useRef<HTMLInputElement>(null);
    const deleteScheduleIdInput = useRef<HTMLInputElement>(null);
    const createSlotDayInput = useRef<HTMLInputElement>(null);
    const createSlotBeginInput = useRef<HTMLInputElement>(null);
    const createSlotEndInput = useRef<HTMLInputElement>(null);

    const createScheduleSlotScheduleIdInput = useRef<HTMLInputElement>(null);
    const createScheduleSlotSlotIdInput = useRef<HTMLInputElement>(null);
    const createScheduleSlotStudentIdInput = useRef<HTMLInputElement>(null);
    const createScheduleSlotCourseIdInput = useRef<HTMLInputElement>(null);

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
        if (!createScheduleYearInput.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/`, {
            'method': "POST",
            "headers": {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year: parseInt(createScheduleYearInput.current.value) })
        });
    }

    const createSlotHandler = () => {
        if (!createSlotDayInput.current?.value || !createSlotBeginInput.current?.value || !createSlotEndInput.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/slot/`, {
            'method': "POST",
            "headers": {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ day: createSlotDayInput.current.value, begin_time: createSlotBeginInput.current.value, end_time: createSlotEndInput.current.value })
        });
    }

    const createScheduleSlotHandler = () => {
        if (!createScheduleSlotScheduleIdInput.current?.value || !createScheduleSlotSlotIdInput.current?.value || !createScheduleSlotStudentIdInput.current?.value || !createScheduleSlotCourseIdInput.current?.value) {
            return;
        }

        makeRequest(`/api/schedule/scheduleslot/`, {
            'method': "POST",
            "headers": {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ schedule_id: createScheduleSlotScheduleIdInput.current.value, slot_id: createScheduleSlotSlotIdInput.current.value, student_id: createScheduleSlotStudentIdInput.current.value, course_id: createScheduleSlotCourseIdInput.current.value})
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
            body: JSON.stringify({ year: parseInt(updateScheduleYearInput.current.value) })
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
                        <span>year:</span>
                        <input type="inut" ref={createScheduleYearInput} />
                        <button onClick={createScheduleHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Create Slot</h3>
                    <div>
                        <span>POST</span>
                        <span>/api/schedule/</span>
                        <span>day:</span>
                        <input type="inut" ref={createSlotDayInput} />
                        <span>begin:</span>
                        <input type="inut" ref={createSlotBeginInput} />
                        <span>end:</span>
                        <input type="inut" ref={createSlotEndInput} />
                        <button onClick={createSlotHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Create ScheduleSlot</h3>
                    <div>
                        <span>POST</span>
                        <span>/api/schedule/</span>
                        <span>schedule_id:</span>
                        <input type="inut" ref={createScheduleSlotScheduleIdInput} />
                        <span>slot_id:</span>
                        <input type="inut" ref={createScheduleSlotSlotIdInput} />
                        <span>student_id:</span>
                        <input type="inut" ref={createScheduleSlotStudentIdInput} />
                        <span>course_id:</span>
                        <input type="inut" ref={createScheduleSlotCourseIdInput} />
                        <button onClick={createScheduleSlotHandler}>Send</button>
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