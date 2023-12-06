export const sendResponse = (res, status, message, data) => {
    const response = {
        status: 'success',
        message,
    };

    if (data !== undefined) {
        response.data = data;
    }

    res.status(status).json(response);
};