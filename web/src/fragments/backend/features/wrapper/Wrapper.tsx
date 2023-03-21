import React, { Fragment } from "react"

export const Wrapper = () => {
    return (
        <Fragment>
            <div className="content-wrapper iframe-mode bg-dark" data-widget="iframe" data-auto-dark-mode="true" data-loading-screen="750">
                <div className="nav navbar navbar-expand-lg navbar-dark border-bottom border-dark p-0">
                    <a className="nav-link bg-danger" href="#" data-widget="iframe-close">Close</a>
                    <a className="nav-link bg-dark" href="#" data-widget="iframe-scrollleft"><i className="fas fa-angle-double-left"></i></a>
                    <ul className="navbar-nav" role="tablist">
                    </ul>
                    <a className="nav-link bg-dark" href="#" data-widget="iframe-scrollright"><i className="fas fa-angle-double-right"></i></a>
                    <a className="nav-link bg-dark" href="#" data-widget="iframe-fullscreen"><i className="fas fa-expand"></i></a>
                </div>
                <div className="tab-content">
                    <div className="tab-empty">
                        <h2 className="display-4">No tab selected!</h2>
                    </div>
                    <div className="tab-loading">
                        <div>
                            <h2 className="display-4">Tab is loading <i className="fa fa-sync fa-spin"></i></h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}