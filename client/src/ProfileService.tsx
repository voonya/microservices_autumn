import { useRef } from 'react';
import './App.css';

const ProfileService = () => {
    const responseDiv = useRef<HTMLDivElement>(null);
    const getProfileIdInput = useRef<HTMLInputElement>(null);
    const createProfileLoginInput = useRef<HTMLInputElement>(null);
    const createProfilePasswordInput = useRef<HTMLInputElement>(null);
    const deleteProfileIdInput = useRef<HTMLInputElement>(null);
    const createFileIdInput = useRef<HTMLInputElement>(null);
    const createFileFileInput = useRef<HTMLInputElement>(null);


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

        makeRequest(`/api/profile/${getProfileIdInput.current.value}`);
    }

    const createProfileHandler = () => {
        if (!createProfileLoginInput.current?.files) {
            return;
        }
        if (!createProfilePasswordInput.current?.files) {
            return;
        }
        makeRequest(`/api/profile/`, { 'method': "POST", body: JSON.stringify({
                login: createProfileLoginInput.current.value,
                password: createProfilePasswordInput.current.value
            }) });
    }

    const createFileHandler = () => {
        if (!createFileFileInput.current?.files) {
            return;
        }
        if (!createFileIdInput.current?.files) {
            return;
        }
        const files = createFileFileInput.current.files;
        const filesData = new FormData()
        Array.from(files).forEach(file => {
            filesData.append('files', file);
        });

        console.log(filesData.getAll('files'));

        makeRequest(`/api/profile/file/${createFileIdInput.current.value}`, { method: "POST", body: filesData });
    }


    const deleteProfileHandler = () => {
        if (!deleteProfileIdInput.current?.value) {
            return;
        }

        makeRequest(`/api/profile/${deleteProfileIdInput.current.value}`, { method: "DELETE" });
    }

    // const updateProfileHandler = () => {
    //     if (!updateProfileIdInput.current?.value) {
    //         return;
    //     }
    //
    //     makeRequest(`/api/profile/${updateProfileIdInput.current.value}`);
    // }

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
                        <span>/api/profile/:id</span>
                        <input type='text' ref={getProfileIdInput}></input>
                        <button onClick={getProfileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Create Profile</h3>
                    <div>
                        <span>POST</span>
                        <span>/api/profile/</span>
                        <input type="text" ref={createProfileLoginInput} placeholder="login" />
                        <input type="text" ref={createProfilePasswordInput} placeholder="password" />
                        <button onClick={createProfileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Delete Profile</h3>
                    <div>
                        <span>Delete</span>
                        <span>/api/profile/:id</span>
                        <input type="text" ref={deleteProfileIdInput} />
                        <button onClick={deleteProfileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Change Avatar</h3>
                    <div>
                        <span>POST</span>
                        <span>/api/profile/file/:id</span>
                        <input type="id" ref={createFileIdInput} multiple />
                        <input type="file" ref={createFileFileInput} multiple />
                        <button onClick={createFileHandler}>Send</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ProfileService