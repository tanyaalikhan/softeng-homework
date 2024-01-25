import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import Title from "./components/title.tsx";
import Intro from "./components/intro.tsx";
import List from "./components/list.tsx";
import Table from "./components/table.tsx";
import Form from "./components/form.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <App/>
            <Title />
            <Intro />
            <List />
            <Table />
            <Form />
    </React.StrictMode>,
)
