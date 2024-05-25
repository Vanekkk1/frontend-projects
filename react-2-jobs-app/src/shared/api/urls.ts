type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | "PATCH";

interface Endpoint {
    url: string;
    method: HttpMethod;
}

const BackendUrls: { [key: string]: Endpoint } = {
    GetAllJobs: {
        url: "/jobs",
        method: 'GET'
    },
    GetJob: {
        url: "/jobs/:id",
        method: 'GET'
    },
    CreateJob: {
        url: "/jobs",
        method: 'POST'
    },
    AddJobPageURL:
    {
        url: "/add-job",
        method: 'POST'
    },
    DeleteJob: {
        url: "/jobs/:id",
        method: 'DELETE'
    },
    EditJob: {
        url: "/jobs/:id",
        method: 'PUT'
    },
    EditJobPageURL: {
        url: "/edit-job/:id",
        method: 'PUT'
    }

};

export default BackendUrls;
