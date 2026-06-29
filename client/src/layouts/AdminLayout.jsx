import Sidebar from "../components/Admin/Sidebar/Sidebar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main
        style={{
          marginLeft: "260px",
          padding: "30px",
          width: "100%",
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;