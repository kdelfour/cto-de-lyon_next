import type { APIRoute } from 'astro';

export const GET_Events: APIRoute = async () => {
    // Utilisation des variables d'environnement
    const token = import.meta.env.EVENTBRITE_TOKEN;
    const orgId = import.meta.env.EVENTBRITE_ORG_ID;
    const url = `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/?status=live`;

    // Effectuer la requête API
    return fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error(error);
            return { error: "Failed to fetch events" };
        });
};
