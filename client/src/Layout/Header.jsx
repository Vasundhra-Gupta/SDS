export default function Header() {
    return (
        <>
            <div className="px-1 py-1  text-center bg-[#007acc] text-white">
                <h1 className="bg-[#007acc] text-white">Education Support Platform</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Your pathway to better educational opportunities
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
                </div>
            </div>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a
                            href="/"
                            className="d-inline-flex link-body-emphasis text-decoration-none"
                        >
                            <svg
                                className="bi"
                                width="40"
                                height="32"
                                role="img"
                                aria-label="Bootstrap"
                            >
                                <use xlinkHref="#bootstrap"></use>
                            </svg>
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a
                                href="/home"
                                className="nav-link px-2 link-secondary"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/donation" className="nav-link px-2">
                                Donation
                            </a>
                        </li>
                        <li>
                            <a href="/scholarship" className="nav-link px-2">
                                Scholarships
                            </a>
                        </li>
                        <li>
                            <a href="/loans" className="nav-link px-2">
                                Loans
                            </a>
                        </li>
                        <li>
                            <a href="/resources" className="nav-link px-2">
                                Resources
                            </a>
                        </li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                        >
                            Login
                        </button>
                        <button type="button" className="btn btn-primary">
                            Sign-up
                        </button>
                    </div>
                </header>
            </div>
        </>
    );
}
