import { BASE_API } from '@/shared/constants/baseApi';
import { appFetch } from '@/shared/utilities/appFetch';
import { IDENTITY_ENDPOINTS } from '@/features/identity/constants/identityEndpoints';

async function login(formData: FormData) {
  return await appFetch<string>(`${BASE_API}/${IDENTITY_ENDPOINTS.login}`, {
    body: formData,
    method: 'POST',
  });
}

const identityService = { login };

export default identityService;
