
function Footer ({ darkMode, toggleDarkMode }) {
    return (
        <footer>
            {darkMode ? (
                <img src="/src/assets/images/footer-light.svg"></img>
            ) : (
                <img src="/src/assets/images/footer.svg"></img>
                
            )}
            
            <div className="footer-content">
                <div className="content-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copyright" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
                    </svg>
                    <p>Sidney Engstrom, 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;