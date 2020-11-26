export default async function makeRequest(reqApi, form, method) {
    console.log("THIS IS TOKEN ")
    let response;
    if (form === null) {
        try {
            response = await fetch(reqApi, {
                method: method,
                headers: {
                    'Accept': 'application/json'
                }


            });
        } catch (error) {
            return false;

        }
    } else {
        try {
            response = await fetch(reqApi, {
                method: method,
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            return false;


        }
    }

    if (response.ok) {
        const json = await response.json();
        console.log(response.status)
        return json;


    } else {
        return false;


    }



}