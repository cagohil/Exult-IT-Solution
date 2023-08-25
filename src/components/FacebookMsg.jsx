import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <>
            <FacebookProvider appId="433931574524671" chatSupport>
                <CustomChat pageId="109254464631774" minimized={true} />
            </FacebookProvider>
        </>
    )
}

export default FacebookMsg;
