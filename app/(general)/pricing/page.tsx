import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Precios',
 description: 'Precios de mi Pagina',
 keywords:  ['SEO', 'Angel Luna Lugo'],

};

export default function PricingPage(){
    return (
        <>
        <span className="text-7xl">Hola soy PricingPage </span>
        </>
    )
}