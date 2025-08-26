import { MoonLoader } from "react-spinners"

function ImageLoader({loading}){
    return(
        <div className="loader">
            <p>images loading ...</p>
            <MoonLoader
                className='loading'
                color="#FFFFFF"
                loading={loading}
                speedMultiplier={0.75}
            />
        </div>
    )
}

export default ImageLoader