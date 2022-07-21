const sgMail = require("@sendgrid/mail");

export default function handler(req: any, res: any) {
  const { email, name, role, quality, comment } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  if (req.method === "POST" && email) {
    const msg = [
      {
        to: email, // Change to your recipient
        from: "contact@alexandre-houmeau.com", // Change to your verified sender
        templateId: "d-b2c8ac2fb3174c72b0f5a7d1101783c2",
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
        res.json({ error });
      });
  } else {
    return res.json("Hello WOrld from api/email GET");
  }
}
