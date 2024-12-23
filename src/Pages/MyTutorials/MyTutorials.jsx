import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MyTutorials() {
    const tutorials = useLoaderData();

    return (
        <div className='min-h-[450px]'>
            this is a my tutorials components
        </div>
    )
}
export default MyTutorials
