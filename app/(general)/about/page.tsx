import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords:  ['About', 'Angel Luna' ,'Mi primera página web'],


};

export default function AboutPage(){
    return (
        <main className="flex flex-col items-center p-24 ">
            <span className="text-7xl">Hola soy AboutPage </span>
        </main>
    )
}