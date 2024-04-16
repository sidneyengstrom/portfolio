function ClipboardNotif ({ showNotification }) {
    return(
        <div className={`clipboard notification ${showNotification ? 'show' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon checkmark" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#1B1B1B" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10" />
            </svg>
            <p>Email copied to clipboard</p>
        </div>
    )
}
export default ClipboardNotif

