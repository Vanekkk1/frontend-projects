import React, { useState } from "react";
import { JobType } from "../shared/types/job.type";
import BackendUrls from "../shared/api/urls";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";

type JobProps = {
    job: JobType
}

const JobCard: React.FunctionComponent<JobProps> = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = job.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + "  ";
    }

    return (
        <div key={job.id} className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>
                <div className="mb-5">
                    {description}
                    <button
                        onClick={() => setShowFullDescription((prevState) => !prevState)}
                        className="text-indigo-500 mb-5 mt-1 hover:text-indigo-600"
                    >
                        {showFullDescription ? "See Less" : "See More"}
                    </button>
                </div>
                <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3 lg:mb-0">
                        <FaMapLocation className="inline text-lg mb-1 mr-1" />
                        {job.location}
                    </div>
                    <Link
                        to={BackendUrls.GetJob.url.replace(':id', job.id)}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm flex items-center justify-center"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
