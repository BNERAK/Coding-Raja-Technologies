document.getElementById('generateButton').addEventListener('click', function () {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const degree = document.getElementById('degree').value;
    const branch = document.getElementById('branch').value;
    const cgpa = document.getElementById('cgpa').value;
    const year1 = document.getElementById('year1').value;
    const college = document.getElementById('college').value;
    const group = document.getElementById('group').value;
    const percentage = document.getElementById('percentage').value;
    const year2 = document.getElementById('year2').value;
    const school = document.getElementById('school').value;
    const ssc = document.getElementById('ssc').value;
    const cgpa2 = document.getElementById('cgpa2').value;
    const year3 = document.getElementById('year3').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Create the resume content as a string
    const resumeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Generated Resume</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                }
                h1, h2, h3 {
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                }
                .section {
                    margin-bottom: 20px;
                }
                .section h3 {
                    margin-top: 0;
                }
                .section p {
                    margin: 0;
                }
                #downloadLink {
                    display: block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    text-align: center;
                    border-radius: 5px;
                    width: 200px;
                    margin: 0 auto;
                }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>

            <div class="section">
                <h2>Education</h2>
                <h3>${degree}</h3>
                <p>Branch: ${branch}</p>
                <p>CGPA: ${cgpa}</p>
                <p>Year: ${year1}</p>
                <h3>${college}</h3>
                <p>Group: ${group}</p>
                <p>Percentage: ${percentage}</p>
                <p>Year: ${year2}</p>
                <h3>${school}</h3>
                <p>SSC: ${ssc}</p>
                <p>CGPA: ${cgpa2}</p>
                <p>Year: ${year3}</p>
            </div>

            <div class="section">
                <h2>Experience</h2>
                <p>${experience}</p>
            </div>

            <div class="section">
                <h2>Skills</h2>
                <p>${skills}</p>
            </div>

            <a id="downloadLink" href="#">Download Resume</a>
        </body>
        </html>
    `;

    // Create a new window and write the resume content
    const resumeWindow = window.open('', '_blank');
    resumeWindow.document.write(resumeContent);

    // Create a Blob from the resume content
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Create a download link
    const downloadLink = resumeWindow.document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = 'resume.html';
});
