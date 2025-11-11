export const callToApi = async ({ url, method = 'GET', data = null, headers = {} }) => {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
                ...headers,
            },
            body: data ? JSON.stringify(data) : null,
            credentials: 'include',
        };

        if (method.toUpperCase() === 'GET') {
            delete options.body;
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw {
                status: response.status,
                statusText: response.statusText,
                ...error,
            };
        }

        return await response.json();
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};
