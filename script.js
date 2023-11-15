function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;

    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = `
        <div class="box-header">
            <h2>${fullName}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
        </div>
        <div class="box-section">
            <h3>Education</h3>
            <ul>
                ${education.split('\n').map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="box-section">
            <h3>Work Experience</h3>
            <ul>
                ${experience.split('\n').map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="box-section">
            <h3>Skills</h3>
            <ul>
                ${skills.split('\n').map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="box-section">
            <h3>Projects</h3>
            <ul>
            ${projects.split('\n').map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}
