export const handler = async (req) => {
    const { username, password } = JSON.parse(req.body);

    if (username === 'user' && password === 'pass') {
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
            }),
        }
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({
                success: false,
            }),
        }
    }
};
