import { useState } from "react";
import Edu_Card from "./Edu_Card";
import Exp_Card from "./Exp_Card";
import BannerLayout from "../../Common/BannerLayout";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

function Background() {

    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('/api/background')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <BannerLayout className="flex-1 flex flex-col " variant="flow">
            <div className="relative z-30 grid md:grid-cols-2 md:divide-x-4 md:divide-Green gap-y-8 px-4 pt-8 md:pt-10 pb-32 md:pb-16 flex-1 md:min-h-0" style={{ contain: 'layout', position: 'relative', zIndex: 30 }}>
                <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12 mb-24 md:mb-0">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {isLoading ?
                        [1, 2, 3].map(() => (
                             <ParagraphSkeleton className="p-8 h-full w-full relative" />
                        ))
                        :
                        data && data[0]?.eduCards?.map((data, key) => (
                            <Edu_Card key={key} data={data} />
                        ))
                    }

                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className="md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>

                        {isLoading ?
                            [1, 2, 3].map(() => (
                                <ParagraphSkeleton className="p-8 h-full w-full relative" />
                            ))
                            :
                            data && data[1]?.expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </BannerLayout>
    );
}

export default Background;
