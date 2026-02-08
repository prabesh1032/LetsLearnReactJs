import { useRef } from "react";
function Video() {
    const videoRef = useRef(null);

    const handleStart = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
    }
    const handleReset = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }


    return (
        <div>
            <h1>Video Component</h1>
            <p>This is the Video component.</p>
            <p>see the video below</p>
            <video ref={videoRef} src="/snake.mp4" width={600} height={500} />
            <div>
                <button onClick={handleStart}>start</button>
                <button onClick={handlePause}>pause</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </div>
    );
}
export default Video;