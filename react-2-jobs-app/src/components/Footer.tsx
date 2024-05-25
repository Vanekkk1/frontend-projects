import React from 'react';
import BackendUrls from "../shared/api/urls";
import { Link } from "react-router-dom";

const Footer: React.FunctionComponent = () => {
    return (
        <div>
            <section className="m-auto max-w-lg my-10 px-6">
                <Link
                    to={BackendUrls.GetAllJobs.url}
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                    View All Jobs
                </Link>
            </section>

            <script src="js/main.js"></script>
        </div>
    );
};

export default Footer;
