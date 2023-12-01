import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import { NextSeo } from "next-seo"
import PageLoader from "../../components/LottieAnimations/pageLoader/PageLoader"

const Tracking = dynamic(() => import('../../components/Tracking/Tracking'), {
    ssr: false,
});


const Tracker = () => {
    const [pageLoading, setPageLoading] = useState(false)

    useEffect(() => {
        setPageLoading(true)
        setTimeout(() => {
            setPageLoading(false)
        }, 5000);
    }, [])

    const SEO = {
        title: "Locust Locator",
        description: "track locusts here",

        openGraph: {
            title: "Locust Locator",
            description: "track locusts here",
        },
    }

    return (
        <>
            <NextSeo {...SEO} />
            {pageLoading ?
                (
                    <div id="loading-overlay">
                        <div className="loader-content">
                            <PageLoader />
                            <h1 style={{ fontSize: "calc(8px + 0.8vw)", color: "rgb(228, 227, 227)", textAlign: "center" }}>Disclaimer: To get the best gpu performance use the desktop app.</h1>
                        </div>
                    </div>
                )
                : null}
            <Tracking />
        </>
    )
}

export default Tracker