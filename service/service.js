

const log = (type, action, workerCardId) => {
    fetch(`http://localhost:5305/api/logs`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify({ type, action, workerCardId, date: new Date() })
    });
};

const userUpdate = (userObject) => {
    fetch(`http://localhost:5305/api/users/${userObject?.id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'PUT',
        body: JSON.stringify(userObject)
    });
}

const getUsers = async () => {
    const response = await fetch(`http://localhost:5305/api/users`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await response.json();
    return data;
}

const service = {
    log,
    userUpdate,
    getUsers
}

export default service;