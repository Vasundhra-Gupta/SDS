import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
    return (
        <div>
            <AdminHeader />
            <div className="mt-10px">
                <Outlet />
            </div>
        </div>
    );
}
