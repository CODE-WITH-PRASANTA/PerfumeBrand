import React from "react";
import './PerfumeDetails.css'
import PerfumeHomeBlack from "../../Components/PerfumeHomeBlack/PerfumeHomeBlack";
import PerfumeReviews from "../../Components/PerfumeReviews/PerfumeReviews";
import PerfumeChoose from "../../Components/PerfumeChoose/PerfumeChoose";
import PerfumeLike from "../../Components/PerfumeLike/PerfumeLike";
import PerfumeFAQ from "../../Components/PerfumeFAQ/PerfumeFAQ";

const PerfumeDetails = () => {
    return (
        <div>
            <PerfumeHomeBlack/>
            <PerfumeReviews/>
            <PerfumeChoose/>
            <PerfumeLike/>
            <PerfumeFAQ/>
        </div>
    )
}

export default PerfumeDetails;