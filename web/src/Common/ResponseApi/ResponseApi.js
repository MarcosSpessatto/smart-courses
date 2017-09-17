export const verifyResponse = (response) => {
    return new Promise((resolve, reject) => {
        if (response.data.status === 200)
            resolve(response.data.data);

        reject('Ops, ocorreu um erro...');
    })
}