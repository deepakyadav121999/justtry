
import React from 'react'
import "rsuite/dist/rsuite.min.css";
import { Loader } from 'rsuite';
import '../LoaderComponent.css'

  
function LoaderComponent() {
    return (
        <div className="loader-comonent" >
            <Loader size="md" content=
                "Loading" />
        </div>
    );
}
export default LoaderComponent;