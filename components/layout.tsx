import Navbar from "@/components/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="d-flex flex-column min-vh-100 mx-auto"
      style={{
        maxWidth: "600px",
      }}
    >
      <Navbar />
      <main id="main" className="flex-shrink-0">
        <div className="container-fluid">{children}</div>
      </main>
    </div>
  );
}
