import { ApplicationType } from './types';
import api from '../../api';

export async function getApplication(id: string): Promise<ApplicationType> {
    const response = await api.get<ApplicationType>(`/json/data/applications/${id}`);
    const account = response.data;
    return account;
}

export async function getApplications(): Promise<ApplicationType[]> {
    const response = await api.get<ApplicationType[]>(`/json/data/applications`);
    const accounts = response.data;
    return accounts;
}