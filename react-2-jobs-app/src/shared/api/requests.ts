import BackendUrls from './urls';
import { JobType } from '../types/job.type';


export const getJob = async ({ params }) => {

    const res = await fetch(`/api${BackendUrls.GetJob.url.replace(':id', params.id)}`);
    const data: JobType = await res.json();
    return data;
}

export const addJob = (newJob: JobType) => {
    return fetch(`/api${BackendUrls.CreateJob.url}`, {
        method: BackendUrls.CreateJob.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    })
}

export const deleteJob = (id: string) => {
    return fetch(`/api${BackendUrls.DeleteJob.url.replace(':id', id)}`, {
        method: BackendUrls.DeleteJob.method
    })
}

export const editJob = (id: string, updatedJob: JobType) => {
    return fetch(`/api${BackendUrls.EditJob.url.replace(':id', id)}`, {
        method: BackendUrls.EditJob.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedJob)
    })
}