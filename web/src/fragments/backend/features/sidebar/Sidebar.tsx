import React, { Fragment } from "react"

export const Sidebar = () => {
    return (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="src/contents/backend/index3.html" className="brand-link">
                    <img src="src/contents/backend/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }}/>
                    <span className="brand-text font-weight-light">FGV Logistics</span>
                    </a>

                    <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                        <img src="src/contents/backend/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                            <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                                <i className="right fas fa-angle-left"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="./index.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v1</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="./index2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v2</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="./index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v3</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="src/contents/backend/src/contents/backend/pages/widgets.html" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Ensalamento
                                <span className="right badge badge-danger">New</span>
                            </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie"></i>
                            <p>
                                Charts
                                <i className="right fas fa-angle-left"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="src/contents/backend/src/contents/backend/pages/charts/chartjs.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>ChartJS</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/src/contents/backend/pages/charts/flot.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Flot</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/src/contents/backend/pages/charts/inline.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Inline</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-tree"></i>
                            <p>
                                UI Elements
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/general.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>General</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/icons.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Icons</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/buttons.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Buttons</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/sliders.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Sliders</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/modals.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Modals & Alerts</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/navbar.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Navbar & Tabs</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/timeline.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Timeline</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/UI/ribbons.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Ribbons</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit"></i>
                            <p>
                                Aplicações
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/forms/general.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>General Elements</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/forms/advanced.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Advanced Elements</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/forms/editors.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Editors</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/forms/validation.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Validation</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-table"></i>
                            <p>
                                Tables
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/tables/simple.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Simple Tables</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/tables/data.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>DataTables</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/tables/jsgrid.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>jsGrid</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-header">EXAMPLES</li>
                        <li className="nav-item">
                            <a href="src/contents/backend/pages/calendar.html" className="nav-link">
                            <i className="nav-icon far fa-calendar-alt"></i>
                            <p>
                                Calendar
                                <span className="badge badge-info right">2</span>
                            </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="src/contents/backend/pages/gallery.html" className="nav-link">
                            <i className="nav-icon far fa-image"></i>
                            <p>
                                Gallery
                            </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon far fa-envelope"></i>
                            <p>
                                Mailbox
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/mailbox/mailbox.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Inbox</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/mailbox/compose.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Compose</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/mailbox/read-mail.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Read</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-book"></i>
                            <p>
                                Pages
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/invoice.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Invoice</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/profile.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Profile</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/e-commerce.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>E-commerce</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/projects.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Projects</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/project-add.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Project Add</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/project-edit.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Project Edit</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/project-detail.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Project Detail</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/contacts.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Contacts</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/faq.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>FAQ</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/contact-us.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Contact us</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon far fa-plus-square"></i>
                            <p>
                                Extras
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>
                                    Login & Register v1
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                                </a>
                                <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/login.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Login v1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/register.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Register v1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/forgot-password.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Forgot Password v1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/recover-password.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Recover Password v1</p>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>
                                    Login & Register v2
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                                </a>
                                <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/login-v2.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Login v2</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/register-v2.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Register v2</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/forgot-password-v2.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Forgot Password v2</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="src/contents/backend/pages/examples/recover-password-v2.html" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Recover Password v2</p>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/lockscreen.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Lockscreen</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/legacy-user-menu.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Legacy User Menu</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/language-menu.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Language Menu</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/404.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Error 404</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/500.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Error 500</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/pace.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Pace</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/examples/blank.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Blank Page</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="starter.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Starter Page</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-search"></i>
                            <p>
                                Search
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/search/simple.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Simple Search</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="src/contents/backend/pages/search/enhanced.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Enhanced</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-header">MISCELLANEOUS</li>
                        <li className="nav-item">
                            <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                            <i className="nav-icon fas fa-file"></i>
                            <p>Documentation</p>
                            </a>
                        </li>
                        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="fas fa-circle nav-icon"></i>
                            <p>Level 1</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-circle"></i>
                            <p>
                                Level 1
                                <i className="right fas fa-angle-left"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Level 2</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>
                                    Level 2
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                                </a>
                                <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                    <i className="far fa-dot-circle nav-icon"></i>
                                    <p>Level 3</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                    <i className="far fa-dot-circle nav-icon"></i>
                                    <p>Level 3</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                    <i className="far fa-dot-circle nav-icon"></i>
                                    <p>Level 3</p>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Level 2</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="fas fa-circle nav-icon"></i>
                            <p>Level 1</p>
                            </a>
                        </li>
                        <li className="nav-header">LABELS</li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger"></i>
                            <p className="text">Important</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-warning"></i>
                            <p>Warning</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-info"></i>
                            <p>Informational</p>
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </Fragment>
    )
}