import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SelectTemplate from "./pages/Home";
import ParentForm from "./pages/ParentForm";
import PdfGenerator from "./pages/Pdf";
import Login from "./pages/Login";
import PrimaryPage from "./pages/PrimaryPage";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<ParentForm/>} />
          <Route path="/pdf" element={<PdfGenerator/>} />
          <Route path="/home" element={<SelectTemplate/>}/>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider
  router={createBrowserRouter([
    {
      path: '/',
      element: <PrimaryPage/>,
      // errorElement: <ErrorPage />,
      children: [
        {
          // errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Login /> },
            {
              path: '/home',
              element: <SelectTemplate/>,
            },
            {
              path: '/form',
              element: <ParentForm />,
            },
            {
              path: '/pdf',
              element: <PdfGenerator />,
            },
          ],
        },
      ],
    },
  ])}
/>
    </>
  );
}

export default App;
