import {useRef} from 'react';

function ProfileService() {
    const responseDiv = useRef<HTMLDivElement>(null);
    const getProfileIdInput = useRef<HTMLInputElement>(null);
    const createProfileIdInput = useRef<HTMLInputElement>(null);
    const updateProfileIdInput = useRef<HTMLInputElement>(null);
    const deleteProfileIdInput = useRef<HTMLInputElement>(null);

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
    const getProfileHandler = () => {
        if (!getProfileIdInput.current?.value) {
            return;
        }

        makeRequest(`http://localhost:8080/api/profile/${getProfileIdInput.current.value}`);
    }

    const createProfileHandler = () => {
        makeRequest(`http://localhost:8080/api/profile/`, {'method': "POST"});
    }

    const updateProfileHandler = () => {
        if (!updateProfileIdInput.current?.value) {
            return;
        }

        makeRequest(`http://localhost:8080/api/profile/${updateProfileIdInput.current.value}`);
    }

    const deleteProfileHandler = () => {
        if (!deleteProfileIdInput.current?.value) {
            return;
        }

        makeRequest(`http://localhost:8080/api/profile/${deleteProfileIdInput.current.value}`);
    }
    return (
        <div className="App">
            <div className='response-container'>
                <h2>Response: </h2>
                <div ref={responseDiv}></div>
            </div>
            <section className='service-container'>
                <h2>Profile service:</h2>
                <div>
                    <h3>Get Profile</h3>
                    <div>
                        <span>GET</span>
                        <span>http://localhost:8080/api/profile/:id</span>
                        <input type='text' ref={getProfileIdInput}></input>
                        <button onClick={getProfileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Create Profile</h3>
                    <div>
                        <span>POST</span>
                        <span>http://localhost:8080/api/profile/</span>
                        <input type="profile" ref={createProfileIdInput}/>
                        <button onClick={createProfileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Update Profile</h3>
                    <div>
                        <span>Update</span>
                        <span>http://localhost:8080/api/profile/:id</span>
                        <input type="text" ref={updateProfileIdInput}/>
                        <button onClick={updateProfileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Delete Profile</h3>
                    <div>
                        <span>Delete</span>
                        <span>http://localhost:8080/api/profile/:id</span>
                        <input type="text" ref={deleteProfileIdInput}/>
                        <button onClick={deleteProfileHandler}>Send</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ProfileService