import React from 'react';
import JobCard from './JobCard';
import { JobType } from '../shared/types/job.type';
import { useState, useEffect } from 'react';
import BackendUrls from '../shared/api/urls';
import Spinner from './Spinner';


const Jobs: React.FunctionComponent<{ isHome: boolean }> = ({ isHome = false }) => {
    const [jobs, setJobs] = useState<JobType[]>([]);
    const [loadingJobs, setLoadingJobs] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = `/api/${BackendUrls.GetAllJobs.url}`;
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data); // Set all fetched jobs to state
            } catch (error) {
                console.log("error occurred", error);
            } finally {
                setLoadingJobs(false);
            }
        };

        fetchJobs();
    }, [isHome]);

    const displayedJobs = isHome ? jobs.slice(0, 3) : jobs; // Display only 3 jobs on the home page

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>

                {loadingJobs ? (
                    <Spinner loading={loadingJobs} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayedJobs.map((job: JobType) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Jobs;
