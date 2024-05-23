import React from 'react'
import Sidebar from './Sidebar'

const CarParkur = () => {
    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-detail">
                            <img className="w-100" src='/img/references/arac.jpeg' alt="product" />
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>

        </>

    )
}

export default CarParkur