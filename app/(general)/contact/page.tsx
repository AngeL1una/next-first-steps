import { Metadata } from "next";

export const metadata:  Metadata = {

 title: 'Contact AngelMoon',
 description: 'Contactame angellunaprime@gmail.com',
 keywords: ['Contact', 'Angel Luna' ,'Mi primera página web'],
};

export default function ContactPage(){
    return (
        <>
        <span className="text-7xl">Hola soy ContactPage </span>
        </>
    )
}