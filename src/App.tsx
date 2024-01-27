import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/navBar.tsx";
import Title from "./components/title.tsx";
import Intro from "./components/intro.tsx";
import List from "./components/list.tsx";
import Table from "./components/table.tsx";
import Form from "./components/form.tsx";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <div />,
            element: <Root />,
            children: [

                {
                    path: "",
                    element: <Title />
                }
                ,
                {
                    path: "/Intro",
                    element: <Intro />
                },
                {
                    path: "/Table",
                    element: <Table />
                },
                {
                    path: "/List",
                    element: <List />
                },
                {
                    path: "/Form",
                    element: <Form />
                },
                {
                    path: "/List",
                    element: <List />
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
    function Root() {
        return (
            <main>
                <NavBar></NavBar>
                <Outlet />
            </main>
        );
    }
}

export default App;