import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div>
            <AdminHeader />
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    );
}
