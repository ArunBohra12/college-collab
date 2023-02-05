import nodeUrl from 'url';
import pug from 'pug';
import nodemailer from 'nodemailer';
import { htmlToText } from 'html-to-text';

/* It's a class that sends emails to users */
class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = process.env.EMAIL_FROM_NAME;
  }

  /**
   * If the environment is development create transport using mailtrap
   * otherwise use sendgrid to create the transport object
   * @returns A new instance of the nodemailer's transport function.
   */
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      //  sendgrid
      return 1;
    }

    return nodemailer.createTransport({
      host: process.env.MAILTRAP_EMAIL_HOST,
      port: process.env.MAILTRAP_EMAIL_PORT,
      auth: {
        user: process.env.MAILTRAP_EMAIL_USERNAME,
        pass: process.env.MAILTRAP_EMAIL_PASSWORD,
      },
    });
  }

  /**
   * Converts a pug template to text for email and replaces all variables and then sends the email
   * @param template - The name of the pug template file to use.
   * @param subject - The subject of the email
   * @param replaceOptions - This is an object that contains the dynamic data that will be used to
   * replace the placeholders in the email template.
   */
  async send(template, subject, replaceOptions) {
    const __dirname = nodeUrl.fileURLToPath(new URL('.', import.meta.url));
    const html = pug.renderFile(`${__dirname}/../views/emails/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
      ...replaceOptions,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  /**
   * It sends an email to the user when they buy notes
   * @param [replaceOptions] - This is an object that contains the key-value pairs that will be
   * replaced in the email template.
   */
  sendNotesAccessEmail(replaceOptions = {}) {
    this.send('accessNotes', `${this.firstName} access your notes files!`, replaceOptions);
  }
}

export default Email;
