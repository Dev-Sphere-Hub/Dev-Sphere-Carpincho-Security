export const sendResponse = (res, status, message, data) => {
    let statusRes = '';
    if (status.toString().startsWith('2') ? statusRes = 'success' : statusRes = 'fail');
    const response = {
        status: statusRes,
        message,
    };

    if (data !== undefined) {
        response.data = data;
    }

    res.status(status).json(response);
};