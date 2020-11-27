export default async function makeRequest(reqApi, form, method) {
    console.log("THIS IS TOKEN ")
    let response;
    let reqBody;
    try {
        if (form === null) {
            reqBody = {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        } else {
            reqBody = {
                method: method,
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        }
        response = await fetch(reqApi, reqBody);
    } catch (error) {
        return false;


    }


    if (response.ok) {
        const json = await response.json();
        console.log(response.status)
        return json;


    } else {
        return false;


    }



}
