import React from "react"
import { Footer, Navbar, Sidebar } from "../../../fragments/backend"
import { Wrapper } from "../../../fragments/backend/features/wrapper"

export const Dashboard = () => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed dark-mode" data-panel-auto-height-mode="height">
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <Wrapper />
                <Footer />
            </div>
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div>
    )
}