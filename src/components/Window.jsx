import { useEffect, useState } from "react";
function Window() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="window">
            {time.getHours() >= 6 && time.getHours() < 17 ? (
                <span className="sun"></span>
            ) : (
                <div className="moon">
                    <span className="light crater pr"></span>
                    <span className="light crater small sc"></span>
                    <span className="dark crater tr"></span>
                    <span className="dark crater small qr"></span>
                </div>
            )}

            <div className="vertical-bar"></div>
            <div className="horizontal-bar"></div>
        </div>
    )
}
    
export default Window;