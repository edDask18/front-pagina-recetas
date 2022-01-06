import { Sidebar } from "./Sidebar"
import { Content } from "./Content"

export function Dashboard(){
    return(
        <>
            <div className="flex w-screen">
                <Sidebar />
                <Content />
            </div>
        </>
    )
}