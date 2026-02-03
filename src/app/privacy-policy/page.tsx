
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | CodingWorldGaurav",
    description: "Privacy Policy for CodingWorldGaurav. We are committed to protecting your privacy and ensuring you have a positive experience on our website.",
};

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300">
            <h1 className="font-headline text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="mb-6"><em>Last updated: February 04, 2026</em></p>

            <p className="mb-6">Welcome to <strong>CodingWorldGaurav</strong>.</p>
            <p className="mb-8">
                Your privacy matters to us. This page explains what information we collect, why we collect it, and how we keep it safe when you use our website. By using our website, you agree to this policy.
            </p>

            <div className="space-y-10">
                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">What Information We Collect</h2>
                    <p className="mb-4">When you use our website, we may collect two types of information.</p>
                    
                    <h3 className="font-headline text-2xl font-bold mt-6 mb-3 text-white">1. Information you give us</h3>
                    <p>For example, when you:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Sign up or log in</li>
                        <li>Fill out a form</li>
                        <li>Contact us</li>
                        <li>Subscribe to updates</li>
                    </ul>
                    <p>We may collect:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Your name</li>
                        <li>Your email address</li>
                        <li>Any message or details you share</li>
                    </ul>

                    <h3 className="font-headline text-2xl font-bold mt-6 mb-3 text-white">2. Information collected automatically</h3>
                    <p>When you browse the site, we may automatically collect:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Your device and browser type</li>
                        <li>IP address</li>
                        <li>Pages you visit</li>
                        <li>Time spent on pages</li>
                    </ul>
                    <p>This helps us understand how people use the website and improve it.</p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Run and improve the website</li>
                        <li>Respond to your questions</li>
                        <li>Send updates (only if you subscribe)</li>
                        <li>Understand user behavior through analytics</li>
                        <li>Keep the website secure</li>
                    </ul>
                    <p className="font-bold">We never sell your personal information.</p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">Cookies</h2>
                    <p>We use cookies to:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Remember your preferences</li>
                        <li>Analyze traffic (for example, using Google Analytics)</li>
                        <li>Improve your experience</li>
                    </ul>
                    <p>You can disable cookies anytime in your browser settings.</p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">Third-Party Services We Use</h2>
                    <p>We may use trusted services like:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Google Analytics</li>
                        <li>Firebase (for login/authentication)</li>
                        <li>Hosting providers</li>
                        <li>Email services</li>
                    </ul>
                    <p>These services only access the minimum data needed to work properly.</p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">How We Protect Your Data</h2>
                    <p>
                        We use secure systems and best practices to keep your data safe. However, no internet system is 100% secure, so we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">Your Rights</h2>
                    <p>You can:</p>
                    <ul className="list-disc list-inside my-3 pl-4">
                        <li>Ask us what data we have about you</li>
                        <li>Request deletion of your data</li>
                        <li>Unsubscribe from emails anytime</li>
                    </ul>
                    <p>To do this, contact us at: <a href="mailto:codingaurav85@gmail.com" className="text-blue-400 hover:underline">codingaurav85@gmail.com</a></p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">Children’s Privacy</h2>
                    <p>
                        This website is not meant for children under 13 years old. We do not knowingly collect data from children.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy in the future. Any changes will be posted on this page.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-3xl font-bold mt-8 mb-4 text-white">Contact Us</h2>
                    <p>If you have any questions, contact us at:</p>
                    <p><strong>Email:</strong> <a href="mailto:codingaurav85@gmail.com" className="text-blue-400 hover:underline">codingaurav85@gmail.com</a></p>
                </section>

                <p className="mt-12 text-center">Thank you for using <strong>CodingWorldGaurav</strong>.</p>
            </div>
        </div>
    );
}
