import Formheader from "./Formheader";
import { Outlet } from "react-router-dom";
export default function FormLayout() {
    return (
        <div>
            <Formheader />
            <div className="mt-10px">
                <Outlet />
            </div>
        </div>
    );
}
