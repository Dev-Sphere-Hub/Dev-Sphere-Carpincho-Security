export const sendResponse = (res, status, message, data) => {
    if (`${status}`.startsWith('4') ? 'fail' : 'error');
    if (`${status}`.startsWith('2') ? 'success' : 'ok');
    const response = {
        status: status,
        message,
    };

    if (data !== undefined) {
        response.data = data;
    }

    res.status(status).json(response);
};