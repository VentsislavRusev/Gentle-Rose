let url_api = 'http://localhost:3000/getUsers';

function getUsers() {
    fetch(url_api).then(res => {
        if(!res.ok){
            throw Error("Error");
        }
        return res.json();
    }).then(json => {
        const html = json.map(json => {
            return `
            <div class="university">
    <p> UserId: ${json.user}</p>
    <p> The time for the user: ${json.time}</p>
    </div>
            `
        }).join('');
        document.getElementById('app').insertAdjacentElement('afterbegin', html);
    }).catch(err => {
        console.log(err);
    })
}