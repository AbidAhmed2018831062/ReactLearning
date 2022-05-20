import useResize from "./useResize";
export default function Resize(){
    const screen=useResize(768);
    return (
        <div>
            <p>The size of the device is {screen?"small":"large"}</p>
        </div>
    )
}