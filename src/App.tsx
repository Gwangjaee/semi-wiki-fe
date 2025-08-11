import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Login from "./components/Login";

function App() {
  const location = useLocation();

  // ��ҹ��� ���� ���� '/login' ��� �ν�
  const isLoginPage = /^\/login\/?$/.test(location.pathname.toLowerCase());

  return (
    <>
      {!isLoginPage && <Header />}
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {!isLoginPage && <Sidebar />}
        <main
          style={{
            padding: "20px",
            flex: 1,
            backgroundColor: isLoginPage ? "#f5f5f5" : "inherit",
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>�⺻ �������Դϴ�.</div>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
