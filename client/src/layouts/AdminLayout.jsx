import { Outlet } from "react-router-dom";

import Sidebar from "../components/Admin/Sidebar/Sidebar";

function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main
        style={{
          marginLeft: "260px",
          width: "100%",
          padding: "30px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;