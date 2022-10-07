import {useRef} from 'react';
import './App.css';

function FileService() {
    const responseDiv = useRef<HTMLDivElement>(null);
    const getFileIdInput = useRef<HTMLInputElement>(null);
    const createFileIdInput = useRef<HTMLInputElement>(null);
    const updateFileIdInput = useRef<HTMLInputElement>(null);
    const deleteFileIdInput = useRef<HTMLInputElement>(null);

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
    const getFileHandler = () => {
        if (!getFileIdInput.current?.value) {
            return;
        }

        makeRequest(`/api/file-service/file/${getFileIdInput.current.value}`);
    }

    const createFileHandler = () => {
        makeRequest(`/api/file-service/file/`, {'method': "POST"});
    }

    const updateFileHandler = () => {
        if (!updateFileIdInput.current?.value) {
            return;
        }

        makeRequest(`/api/file-service/file/${updateFileIdInput.current.value}`);
    }

    const deleteFileHandler = () => {
        if (!deleteFileIdInput.current?.value) {
            return;
        }

        makeRequest(`/api/file-service/file/${deleteFileIdInput.current.value}`);
    }
    return (
        <div className="App">
            <div className='response-container'>
                <h2>Response: </h2>
                <div ref={responseDiv}></div>
            </div>
            <section className='service-container'>
                <h2>File service:</h2>
                <div>
                    <h3>Get File</h3>
                    <div>
                        <span>GET</span>
                        <span>/api/file-service/file/:id</span>
                        <input type='text' ref={getFileIdInput}></input>
                        <button onClick={getFileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Create File</h3>
                    <div>
                        <span>POST</span>
                        <span>/api/file-service/file/</span>
                        <input type="file" ref={createFileIdInput}/>
                        <button onClick={createFileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Update File</h3>
                    <div>
                        <span>Update</span>
                        <span>/api/file-service/file/:id</span>
                        <input type="text" ref={updateFileIdInput}/>
                        <button onClick={updateFileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Delete File</h3>
                    <div>
                        <span>Delete</span>
                        <span>/api/file-service/file/:id</span>
                        <input type="text" ref={deleteFileIdInput}/>
                        <button onClick={deleteFileHandler}>Send</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default FileService