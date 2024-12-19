let currentUuid = null;

export const setUuid = (uuid) => {
    if (!uuid) {
        throw new Error('UUID cannot be null or undefined');
    }

    console.log('Previous UUID:', currentUuid);
    currentUuid = uuid;
    console.log('New UUID set:', currentUuid);
    return currentUuid; // Return for verification
};

export const getUuid = () => {
    console.log('Retrieving UUID:', currentUuid);
    if (!currentUuid) {
        console.log('UUID not set');
    }
    console.log('Retrieving UUID:', currentUuid);
    return currentUuid;
};

export const isUuidSet = () => {
    return !!currentUuid;
};