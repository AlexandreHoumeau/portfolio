const sgMail = require("@sendgrid/mail");
const fs = require("fs");

function base64_encode(file: any) {
  var bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString("base64");
}

export default function handler(req: any, res: any) {
  const { email, name, role, quality, comment } = req.body;
  let data_base64 = base64_encode('public/images/my_resume.jpg');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  if (req.method === "POST" && email) {
    const msg = [
      {
        to: email, // Change to your recipient
        from: "contact@alexandre-houmeau.com", // Change to your verified sender
        templateId: "d-b2c8ac2fb3174c72b0f5a7d1101783c2",
        attachments: [
          {
            filename: `my_resume`,
            content: data_base64,
            contentType:  'image/jpeg',
            disposition: 'attachment'
          }
         ]
        
      },
      {
        to: "alexandre.houmeau@gmail.com", // Change to your recipient
        from: "contact@alexandre-houmeau.com", // Change to your verified sender
        subject: "New visitor on you website",
        html: `<p>List of informations:</p>
          <ul>
            <li>name: ${name}</li>
            <li>email: ${email}</li>
            <li>comment: ${comment ? comment : "none"}</li>
            ${role && `<li>role ${role}</li>`}
            ${quality && `<li>He think your website is ${quality}</li>`}
          </ul>
          <br/>
          <strong>You can do this I believe in you!!</strong>
        `,
      },
    ];
    sgMail
      .send(msg)
      .then(() => {
        return res.json("Email sent");
      })
      .catch((error: any) => {
        console.log(error)
        res.json({ error });
      });
  } else {
    return res.json("Hello WOrld from api/email GET");
  }
}
