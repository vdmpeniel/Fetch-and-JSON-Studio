// TODO: add code here
window.addEventListener('load', () => {
    console.log('Starting fetch studio');
    const container = document.getElementById('container');
    let content = '';

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
        data.forEach(astronaut => {
            content += `
                <div class="astronaut">
                    <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li class="${astronaut.active ? 'active' : ''}">Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
            `;
        });

        content += `<div class="counter">
                        <h3>Total astronauts: ${data.length}</h3>
                    </div>    
        `;

        container.innerHTML = content;

    });
});