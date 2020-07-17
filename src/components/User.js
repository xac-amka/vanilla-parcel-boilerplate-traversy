import axios from 'axios';

const User = async () => {
    const res = await axios.get('https://randomuser.me/api');
    const user = res.data.results[0];

    const template = `
        <div class='card'>
            <img src='${user.picture.large}'/>
            <div class='card-body'>
                <h1>${user.name.first} ${user.name.last}</h1>
                <ul>
                    <li>Email: ${user.email}</li>
                    <li>Phone:  ${user.phone}</li>
                    <li>Location: ${user.location.city}, ${user.location.country}</li>
                </ul>
            </div>
        </div>    
    `;

    return template
}

export default User;