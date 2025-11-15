import React from 'react'
import CardLayout from '../../Common/CardLayout'

const Edu_Card = ({ data }) => {
    return (
        <CardLayout className='keepItEmpty'>
            <div className="card_stylings transition px-4 sm:px-8 py-10">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div className="text-[17px] text-Snow font-medium mb-2 sm:mb-0">{data.title}</div>
                    <div className="flex justify-center items-center text-LightGray bg-DeepNightBlack ml-0 sm:ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal opacity-50 text-center">
                        {" "}
                        {data.year}{" "}
                    </div>
                </div>
                <div className="text-xs text-LightGray font-normal italic mt-1 ">
                    {data.degree}
                </div>
                <div className="text-LightGray text-sm font-normal mt-4 ">
                    {data.detail}
                </div>
            </div>
        </CardLayout>
    )
}

export default Edu_Card