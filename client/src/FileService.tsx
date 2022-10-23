import { useRef } from 'react';
import './App.css';

const FileService = () => {
    const responseDiv = useRef<HTMLDivElement>(null);
    const createFileIdInput = useRef<HTMLInputElement>(null);
    const deleteFileIdInput = useRef<HTMLInputElement>(null);

    const makeRequest = (route: string, options?: Record<string, unknown>) => {
        fetch(route, options)
            .then((response) => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json()
                }
                return response;
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

    const createFileHandler = () => {
        if (!createFileIdInput.current?.files) {
            return;
        }
        const files = createFileIdInput.current.files;
        const filesData = new FormData()
        Array.from(files).forEach(file => {
            filesData.append('files', file);
        });

        console.log(filesData.getAll('files'));

        makeRequest(`/api/file-service/file`, { method: "POST", body: filesData });
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
                        <span>Для перегляду файлів перейдіть на http://localhost:80/api/file-service/file/:id</span>
                    </div>
                </div>
                <div>
                    <h3>Create File</h3>
                    <div>
                        <span>POST</span>
                        <span>/api/file-service/file/</span>
                        <input type="file" ref={createFileIdInput} multiple />
                        <button onClick={createFileHandler}>Send</button>
                    </div>
                </div>
                <div>
                    <h3>Delete File</h3>
                    <div>
                        <span>Delete</span>
                        <span>/api/file-service/file/:id</span>
                        <input type="text" ref={deleteFileIdInput} />
                        <button onClick={deleteFileHandler}>Send</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default FileService