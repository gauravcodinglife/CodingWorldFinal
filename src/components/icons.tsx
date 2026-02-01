import React from 'react';

const AWSLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h100v100H0z" fill="#232F3E"/>
    <path d="M36.8 65.5c-.8 0-1.5-.7-1.5-1.5v-23c0-.8.7-1.5 1.5-1.5h26.4c.8 0 1.5.7 1.5 1.5v23c0 .8-.7 1.5-1.5 1.5H36.8z" fill="#FF9900"/>
    <path d="M50 25C36.2 25 25 36.2 25 50s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 45c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#fff" fillOpacity=".2"/>
    <path d="M50 56.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-10c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" fill="#fff"/>
  </svg>
);

const GCPLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25z" fill="#4285F4"/>
    <path d="M68.4 50c0-10.2-8.2-18.4-18.4-18.4-1.9 0-3.8.3-5.5.8C40.6 30.1 36.1 29 31.2 29c-8.9 0-16.3 5.7-19.1 13.6-1.5 4.5-2.3 9.4-2.3 14.4 0 15.5 12.6 28.1 28.1 28.1 12.5 0 23-8.2 26.9-19.5 1.1-3.2 1.6-6.6 1.6-10.2z" fill="#34A853"/>
    <path d="M50 25c-8.4 0-15.7 4.1-20.2 10.4 5.9.2 11.6 2.4 15.9 6.2 5.3 4.7 8.4 11.3 8.4 18.4 0 2.2-.3 4.4-.8 6.5 8.9-2.3 15.4-10.3 15.4-19.7 0-6.2-2.8-11.7-7.1-15.4-1.6-1.4-3.4-2.5-5.3-3.4-2.1-1-4.4-1.6-6.8-1.8z" fill="#FBBC05"/>
    <path d="M31.2 29c-4.9 0-9.4 1.1-13.4 3.1 3.5-6.8 10.4-11.5 18.2-11.5 3.1 0 6.1.8 8.7 2.2C41.1 23.3 36.3 25.8 33 29.5c-.2-.2-.5-.3-.7-.5-1.1-.9-2.2-1.7-3.4-2.5z" fill="#EA4335"/>
  </svg>
);

const AzureLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.6 22.3L25 50l14.6 27.7h30.8L85 50 70.4 22.3H39.6z" fill="#0078D4"/>
    <path d="M47.4 22.3L25 64.2h16.2L62.5 22.3H47.4z" fill="#005BA1"/>
  </svg>
);

const DockerLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M85.7 50.8c-2.8-1.5-6.6-2.6-11.1-2.6h-5.9V36.5h5.9c4.5 0 8.3-1.1 11.1-2.6 1-2.2 1-5.1-.2-7.1-3.6-5.8-14.2-7.5-24.8-7.5H23.3c-1.3 0-2.3 1-2.3 2.3v39.2c0 1.3 1 2.3 2.3 2.3h1.7c1.3 0 2.3-1 2.3-2.3V57.6h27.4c10.6 0 21.2-1.7 24.8-7.5 1.2-2 .9-4.9-.2-7.1zm-8.8-11.3c-1.8.8-4.2 1.3-6.9 1.3h-5.9V30.1h5.9c2.7 0 5.1.5 6.9 1.3 1.2.5 1.8 1.4 1.8 2.5s-.6 2-1.8 2.6z" fill="#2496ED"/>
    <path d="M89.7 58c-1.2 2-3.3 3.6-5.8 4.7-4.1 1.7-9.2 2.6-14.8 2.6h-5.9v-9.3h5.9c5.6 0 10.7.8 14.8 2.6 2.5 1 4.6 2.7 5.8 4.7zM78 48.2c1.8.8 3 2.1 3 3.6s-1.2 2.8-3 3.6c-3.1 1.3-7.5 2.1-12.6 2.1h-5.9v-15h5.9c5.1 0 9.5.8 12.6 2.1z" fill="#2496ED" fillOpacity=".5"/>
  </svg>
);

const KubernetesLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 25L25 37.5v25L50 75l25-12.5v-25L50 25zm18.8 34.4l-18.8 9.4-18.8-9.4V41.9l18.8-9.4 18.8 9.4v17.5z" fill="#326CE5"/>
    <path d="M50 56.3L37.5 50 50 43.8 62.5 50 50 56.3z" fill="#326CE5"/>
  </svg>
);

export const Icons = {
    aws: AWSLogo,
    gcp: GCPLogo,
    azure: AzureLogo,
    docker: DockerLogo,
    kubernetes: KubernetesLogo,
}
