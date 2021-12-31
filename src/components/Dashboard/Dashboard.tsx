import { Sidebar } from "./Sidebar"
import { Content } from "./Content"

export function Dashboard(){
    return(
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <Content />
            </div>
        </>
    )
}