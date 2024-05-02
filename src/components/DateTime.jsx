import { useEffect, useState } from "react";
function DateTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="post-it-wrap">
            <div className="post-it">
                <p>{time.toLocaleString('default', { month: 'long' })}</p>
                <p>{time.getDate()}</p>
                <p>{time.toLocaleTimeString()}</p>
                <span className="peg"></span>
            </div>

            <div className="post-it bg"></div>
        </div>
        
    );
}

export default DateTime;