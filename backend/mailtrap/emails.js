import { mailtrapClient, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
    } catch (error) {
        throw new Error(`Error sending the verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "c3f7dd96-f8e8-4842-b360-f4f2ffd98078",
            template_variables: {
                "company_info_name": "Notify",
                "name": name
            }
        })
        console.log("Welcome email sent successfully", response)
    } catch (error) {
        throw new Error(`Error sending welcome email: ${error}`)
    }
}