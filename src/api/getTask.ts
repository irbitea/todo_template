export async function getTasks() {
    const response = await fetch('http://localhost:3001/tasks', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    });

    return response.json();
}