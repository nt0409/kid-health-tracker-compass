
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Assessment", path: "/assessment" },
    { name: "Recommendations", path: "/recommendations" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b">
        <div className="container flex justify-between items-center h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <span className="text-blue-500 text-xl font-bold">ChildHealth</span>
              <span className="text-green-500 text-xl font-bold">Compass</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-500",
                  location.pathname === item.path ? "text-blue-500" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-blue-50 border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ChildHealthCompass. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-blue-500">
                Terms
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-blue-500">
                Privacy
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
