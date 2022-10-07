import { useRef, useState } from "react";
import "./App.css";

function App() {
  const responseDiv = useRef<HTMLDivElement>(null);
  const [registerData, setRegisterData] = useState({
    Email: "",
    UserName: "",
    Password: "",
  });
  const [loginData, setLoginData] = useState({
    UserName: "",
    Email: "",
    Password: "",
  });
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
        setResponse(JSON.stringify(data, null, 4));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const setResponse = (response: string) => {
    if (responseDiv.current) {
      responseDiv.current.innerHTML = `<pre>${response}</pre>`;
    }
  };
  const login = () => {
    const data = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData),
    };
    console.log(data);
    makeRequest("/api/auth/login", data);
  };
  const register = () => {
    console.log(JSON.stringify(registerData));
    const data = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData),
    };
    console.log(data);
    makeRequest("/api/auth/register", data);
  };
  const logout = () => {
    makeRequest("api/auth/logout");
  };

  const getFileHandler = () => {
    if (!getFileIdInput.current?.value) {
      return;
    }

    makeRequest(`/api/file-service/file/${getFileIdInput.current.value}`);
  };

  const createFileHandler = () => {
    makeRequest(`/api/file-service/file/`, { method: "POST" });
  };

  const updateFileHandler = () => {
    if (!updateFileIdInput.current?.value) {
      return;
    }

    makeRequest(`/api/file-service/file/${updateFileIdInput.current.value}`);
  };

  const deleteFileHandler = () => {
    if (!deleteFileIdInput.current?.value) {
      return;
    }

    makeRequest(`/api/file-service/file/${deleteFileIdInput.current.value}`);
  };

  return (
    <div className="App">
      <div className="response-container">
        <h2>Response: </h2>
        <div ref={responseDiv}></div>
      </div>
      <section className="service-container">
        <h2>Auth</h2>
        <div>
          <h3>Login</h3>
          <div>
            <span>POST</span>
            <span>/api/auth/login</span>
            <label>
              Email
              <input
                type="text"
                onChange={(e) =>
                  setLoginData({ ...loginData, Email: e.target.value })
                }
              ></input>
            </label>
            <label>
              Password{" "}
              <input
                type="text"
                onChange={(e) =>
                  setLoginData({ ...loginData, Password: e.target.value })
                }
              ></input>
            </label>
            <button onClick={login}>Send</button>
          </div>
        </div>
        <div>
          <h3>Register</h3>
          <div>
            <span>POST</span>
            <span>/api/auth/register</span>
            <label>
              UserName
              <input
                type="text"
                onChange={(e) =>
                  setRegisterData({ ...registerData, UserName: e.target.value })
                }
              ></input>
            </label>
            <label>
              Email
              <input
                type="text"
                onChange={(e) =>
                  setRegisterData({ ...registerData, Email: e.target.value })
                }
              ></input>
            </label>
            <label>
              Password{" "}
              <input
                type="text"
                onChange={(e) =>
                  setRegisterData({ ...registerData, Password: e.target.value })
                }
              ></input>
            </label>
            <button onClick={register}>Send</button>
          </div>
        </div>
        <div>
          <h3>Logout</h3>
          <div>
            <span>POST</span>
            <span>/api/auth/logout</span>
            <button onClick={logout}>Send</button>
          </div>
        </div>
      </section>
      <section className="service-container">
        <h2>File service:</h2>
        <div>
          <h3>Get File</h3>
          <div>
            <span>GET</span>
            <span>/api/file-service/file/:id</span>
            <input type="text" ref={getFileIdInput}></input>
            <button onClick={getFileHandler}>Send</button>
          </div>
        </div>
        <div>
          <h3>Create File</h3>
          <div>
            <span>POST</span>
            <span>/api/file-service/file/</span>
            <input type="file" ref={createFileIdInput} />
            <button onClick={createFileHandler}>Send</button>
          </div>
        </div>
        <div>
          <h3>Update File</h3>
          <div>
            <span>PUT</span>
            <span>/api/file-service/file/:id</span>
            <input type="text" ref={updateFileIdInput} />
            <button onClick={updateFileHandler}>Send</button>
          </div>
        </div>
        <div>
          <h3>Delete File</h3>
          <div>
            <span>PUT</span>
            <span>/api/file-service/file/:id</span>
            <input type="text" ref={deleteFileIdInput} />
            <button onClick={deleteFileHandler}>Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
