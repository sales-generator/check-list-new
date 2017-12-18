export const ajaxJson = (url, params) => {
    return fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {"Content-type": "application/json", 'Access-Control-Allow-Headers': true},
        body: params
    }).then(response => response.arrayBuffer());
};

export const getJson = (url, params) => {
    if (params === undefined) {
        return ajaxJson(url);
    }

    return ajaxJson(url + '/' + params, 'get');

};

export const requestCallback = (url, params) => {
    return ajaxJson(url, params);
};

export const putJson = (url, params) => {
    return ajaxJson(url, 'put', params);
};


export const deleteJson = (url) => {
    return ajaxJson(url, 'delete');
};