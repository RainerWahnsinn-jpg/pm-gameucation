import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../../assets/css/main.css";

export default function Layout({ children }) {
  return (
    <div
      className="layout-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header style={{ flexShrink: 0 }} />
      <div
        className="content-area"
        style={{ display: "flex", flex: 1, overflow: "hidden" }}
      >
        <Sidebar style={{ flexShrink: 0 }} />
        <main style={{ flex: 1, overflowY: "auto", padding: "2rem" }}>
          <div className="container">{children}</div>
        </main>
      </div>
      <Footer style={{ flexShrink: 0 }} />
    </div>
  );
}
