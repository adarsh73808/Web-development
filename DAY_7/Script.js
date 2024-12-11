async function fetchdata() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        const topDiv = document.getElementById('top');
        data.forEach((element) => {
            const userInfo = document.createElement('p');
            userInfo.textContent = `Node Id: ${element.node_id}, Login: ${element.login}`;
            topDiv.appendChild(userInfo);
        });
    } catch (error) {
        console.log(error);
    }
}
