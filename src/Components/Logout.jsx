import { redirect } from "react-router-dom";
import { DeleteItem } from "./Helpers";
import { toast } from "react-toastify";

export async function LogoutAction () {
    DeleteItem({
        key:"userName"
    })
    DeleteItem({
        key:"budget"
    })
    
    toast.success("Account Deleted Successfullly! ")

    return redirect("/")
}