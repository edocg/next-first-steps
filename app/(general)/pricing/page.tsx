import type {Metadata} from 'next';

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO pricing',
 keywords: ['Price1','Price2']
};

export default function PricingPage() {
    return(
            <span className="text-7xl">Pricing Page</span>
    )
}