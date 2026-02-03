
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | CodingWorldGaurav",
    description: "Terms of Service for CodingWorldGaurav. By using our website, you agree to these terms.",
};

export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300">
            <h1 className="font-headline text-4xl font-bold mb-6 text-white">Terms of Service</h1>
            <p className="mb-6"><em>Last updated: February 04, 2026</em></p>

            <p className="mb-6">Welcome to <strong>CodingWorldGaurav</strong>.</p>
            <p className="mb-8">
                These Terms of Service (“Terms”) explain the rules for using our website. By accessing or using this website, you agree to follow these Terms. If you do not agree, please do not use the website.
            </p>

            <div className="space-y-10">
                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">1. Use of Our Website</h2>
                    <p className="mb-4">This website provides learning resources related to coding, system design, cloud, and interview preparation.</p>
                    <p>You agree to use this website only for lawful purposes and in a way that does not harm, disrupt, or misuse the platform.</p>
                    <p className="mt-4">You must not:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Try to hack or damage the website</li>
                        <li>Copy or steal content</li>
                        <li>Use the website for illegal activities</li>
                        <li>Misuse forms, login, or authentication systems</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">2. User Accounts</h2>
                     <p>If you create an account:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>You are responsible for keeping your login details safe</li>
                        <li>You are responsible for all activity under your account</li>
                        <li>We may suspend accounts that violate these Terms</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">3. Intellectual Property</h2>
                    <p>All content on this website (notes, designs, text, resources, branding) belongs to <strong>CodingWorldGaurav</strong>.</p>
                    <p className="mt-4">You may:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Read and learn from the content</li>
                    </ul>
                     <p className="mt-4">You may NOT:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Copy, reproduce, or sell the content</li>
                        <li>Use the content for commercial purposes without permission</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">4. Educational Purpose Only</h2>
                    <p>All content is provided for <strong>educational and informational purposes</strong>.</p>
                    <p className="mt-4">We do not guarantee:</p>
                     <ul className="list-disc list-inside my-3 pl-4">
                        <li>Job placement</li>
                        <li>Interview success</li>
                        <li>Accuracy of every resource</li>
                    </ul>
                    <p className="mt-4">Use the content at your own discretion.</p>
                </section>
                
                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">5. Third-Party Services</h2>
                     <p>We may use services like:</p>
                     <ul className="list-disc list-inside my-3 pl-4">
                        <li>Firebase</li>
                        <li>Google Analytics</li>
                        <li>Hosting providers</li>
                    </ul>
                    <p className="mt-4">We are not responsible for issues caused by third-party services.</p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">6. Limitation of Liability</h2>
                    <p>We are not responsible for:</p>
                     <ul className="list-disc list-inside my-3 pl-4">
                        <li>Any loss or damage from using the website</li>
                        <li>Errors or temporary downtime</li>
                        <li>Issues caused by third-party tools</li>
                    </ul>
                    <p className="mt-4">You use this website at your own risk.</p>
                </section>
                
                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">7. Termination</h2>
                     <p>We reserve the right to:</p>
                     <ul className="list-disc list-inside my-3 pl-4">
                        <li>Block or remove users who violate these Terms</li>
                        <li>Modify or stop the website at any time</li>
                    </ul>
                </section>

                 <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">8. Changes to These Terms</h2>
                     <p>We may update these Terms in the future. Changes will be posted on this page with an updated date.</p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">9. Contact</h2>
                    <p>If you have questions about these Terms, contact us at:</p>
                    <p><strong>Email:</strong> <a href="mailto:codinggaurav85@gmail.com" className="text-blue-400 hover:underline">codinggaurav85@gmail.com</a></p>
                </section>

                <p className="mt-12 text-center">Thank you for using <strong>CodingWorldGaurav</strong>.</p>
            </div>
        </div>
    );
}
