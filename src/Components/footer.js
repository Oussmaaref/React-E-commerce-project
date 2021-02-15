import React from "react"

export default function Footer() {

    return (
        <div className="d-flex flex-column bg-dark text-white">
            <footer className="footer">
                <div>
                    <a href="https://coreui.io">Clothes Store</a>
                    <span >&copy; 2020.</span>
                </div>
                <div className="ml-auto">
                    <span>Powered by</span>
                    <a href="https://coreui.io">Clothes</a>
                </div>
            </footer>
        </div>
    )
}