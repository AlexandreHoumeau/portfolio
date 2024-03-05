const sgMail = require("@sendgrid/mail");
const fs = require("fs");
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig()

// function base64_encode(file: any) {
//   var bitmap = fs.readFileSync(path.join(serverRuntimeConfig.PROJECT_ROOT, file));
//   return new Buffer(bitmap).toString("base64");
// }

export default function handler(req: any, res: any) {
  const { email, name, role, quality, comment } = req.body;
  // let data_base64 = base64_encode('public/pdf/my_resume.pdf');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  if (req.method === "POST" && email) {
    const msg = [
      // {
      //   to: email, // Change to your recipient
      //   from: "contact@alexandre-houmeau.com", // Change to your verified sender
      //   templateId: "d-e477c53d97d146799ddcf57fc46503a5",
      //   // attachments: [
      //   //   {
      //   //     filename: `my_resume`,
      //   //     content: data_base64,
      //   //     type: 'application/pdf',
      //   //     disposition: 'attachment'
      //   //   }
      //   //  ]
        
      // },
      {
        to: "alexandre.houmeau@gmail.com", // Change to your recipient
        from: "contact@alexandre-houmeau.com", // Change to your verified sender
        subject: "New visitor on you website",
        html: `<p>Informations:</p>
          <ul>
            <li>name: ${name}</li>
            <li>email: ${email}</li>
            <li>comment: ${comment ? comment : "none"}</li>
            ${role && `<li>role ${role}</li>`}
            ${quality && `<li>Webiste quality: ${quality}</li>`}
          </ul>
          <br/>
        `,
      },
    ];
    sgMail
      .send(msg)
      .then(() => {
        return res.json("Email sent");
      })
      .catch((error: any) => {
        res.json({ error });
      });
  } else {
    return res.json("Hello WOrld from api/email GET");
  }
}
