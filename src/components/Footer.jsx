import React from 'react';
function Footer() {
    return (<footer className="bg-[#fff1d6] px-6 md:px-10 lg:px-16 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

            <div className="flex gap-8">
                <div>
                    <h1 className="text-6xl font-light">&</h1>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Contact us</h3>
                    <div className="flex gap-4 mb-5">
                        <a href="#" className="hover:opacity-50">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a href="#" className="hover:opacity-50">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="#" className="hover:opacity-50">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a
                            href="https://bloomandwild.onelink.me/octp/92428c2a"
                            className="bg-black text-white text-xs text-center px-4 py-2 rounded hover:bg-gray-700"
                        >
                            App Store
                        </a>

                        <a
                            href="https://play.google.com/store/apps/details?id=com.bloomandwild"
                            className="bg-black text-white text-xs text-center px-4 py-2 rounded hover:bg-gray-700"
                        >
                            Google Play
                        </a>
                    </div>

                    <div className="mt-6 text-3xl">
                        Ⓑ
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">About us</h3>

                <div className="space-y-2 text-sm">
                    <a href="https://www.bloomandwild.com/about-us" target='_blank' className="block hover:underline">Our story</a>
                    <a href="https://www.bloomandwild.com/sustainability" target='_blank' className="block hover:underline">Sustainability</a>
                    <a href="https://www.bloomandwild.com/careers" target='_blank' className="block hover:underline">Careers</a>
                    <a href="https://medium.com/code-wild" target='_blank' className="block hover:underline">Our tech blog</a>
                    <a href="https://www.bloomandwild.com/modern-slavery-act" target='_blank' className="block hover:underline">Modern Slavery Act</a>
                    <a href="https://www.bloomandwild.com/code-of-conduct" target='_blank' className="block hover:underline">Supplier code of conduct</a>
                    <a href="https://www.bloomandwild.com/b-corp" target='_blank' className="block hover:underline">Proud to be a B Corp</a>
                    <a href="https://www.bloomandwild.com/sustainability" target='_blank' className="block hover:underline">Group Governance & Disclosures</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">Our flowers & plants</h3>

                <div className="space-y-2 text-sm">
                    <a href="https://www.bloomandwild.com/the-blog/plant-care" target='_blank' className="block hover:underline">Plant care</a>
                    <a href="https://www.bloomandwild.com/the-blog" target='_blank' className="block hover:underline">Blog</a>
                    <a href="https://www.bloomandwild.com/flower-subscriptions" target='_blank' className="block hover:underline">Flower subscriptions</a>
                    <a href="https://www.bloomandwild.com/city-of-london-flower-delivery" target='_blank' className="block hover:underline">London flower delivery</a>
                    <a href="https://www.bloomandwild.com/county-of-edinburgh/edinburgh-flower-delivery" target='_blank' className="block hover:underline">Edinburgh flower delivery</a>
                    <a href="https://www.bloomandwild.com/send-flowers/tagonly/summer-flowers" target='_blank' className="block hover:underline">Summer Flowers</a>
                    <a href="https://www.bloomandwild.com/send-flowers/tagonly/sunflowers" target='_blank' className="block hover:underline">Sunflower Bouquets</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">Need help?</h3>
                <div className="space-y-2 text-sm">
                    <a href="https://www.bloomandwild.com/help-with-delivery" target='_blank' className="block hover:underline">Where is my order?</a>
                    <a href="https://www.bloomandwild.com/help" target='_blank' className="block hover:underline">Contact us</a>
                    <a href="https://www.bloomandwild.com/delivery-information" target='_blank' className="block hover:underline">Delivery</a>
                    <a href="https://www.bloomandwild.com/sustainability/packaging" target='_blank' className="block hover:underline">Recycle your packaging</a>
                    <a href="https://www.bloomandwild.com/reviews" target='_blank' className="block hover:underline">Reviews</a>
                    <a href="https://www.bloomandwild.com/the-blog/flower-care" target='_blank' className="block hover:underline">Flower school & tips</a>
                    <a href="https://www.bloomandwild.com/privacy-statement" target='_blank' className="block hover:underline">Privacy statement</a>
                    <a href="https://www.bloomandwild.com/sitemap" target='_blank' className="block hover:underline">Sitemap</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">Discounts & offers</h3>

                <div className="space-y-2 text-sm">
                    <a href="https://secure.gocertify.me/at/bloom-wild-key-worker" target='_blank' className="block hover:underline">Keyworker discount</a>
                    <a href="https://www.bloomandwild.com/student-discount" target='_blank' className="block hover:underline">Student & graduate discount</a>
                    <a href="https://www.bloomandwild.com/share?situation=1gbwefo" target='_blank' className="block hover:underline">Refer a friend</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">International sites</h3>

                <div className="space-y-2 text-sm">
                    <a href="https://www.bloomandwild.com/?countryId=2" target='_blank' className="block hover:underline">Ireland</a>
                    <a href="https://www.bloomandwild.de/" target='_blank' className="block hover:underline">Germany</a>
                    <a href="https://www.bloomandwild.com/de-at" target='_blank' className="block hover:underline">Austria</a>
                    <a href="https://www.bergamotte.fr/livraison-fleurs" target='_blank' className="block hover:underline">France</a>
                    <a href="https://www.bloomon.nl/" target='_blank' className="block hover:underline">Netherlands</a>
                    <a href="https://www.bloomon.be/" target='_blank' className="block hover:underline">Belgium</a>
                    <a href="https://www.bloomon.dk/" target='_blank' className="block hover:underline">Denmark</a>
                </div>
            </div>

        </div>

        <div className="border-t border-black/10 mt-12 pt-8">

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

                <div className="flex flex-wrap gap-2">

                    <div className="bg-white px-3 py-2 rounded-[2px]">
                        <img src="/footer/visa.png" width={'20px'} alt="" />
                    </div>

                    <div className="bg-white px-3 py-2 rounded-[2px]">
                        <img src="/footer/mastercard.png" width={'20px'} alt="" />
                    </div>

                    <div className="bg-white px-3 py-2 rounded-[2px]">
                        <img src="/footer/amex.png" width={'20px'} alt="" />
                    </div>

                    <div className="bg-white px-3 py-2 rounded-[2px]">
                        <img src="/footer/paypal.png" width={'20px'} alt="" />
                    </div>

                    <div className="bg-white px-3 py-2 rounded-[2px]">
                        <img src="/footer/applepay.png" width={'20px'} alt="" />
                    </div>

                    <div className="bg-white px-3 py-2 rounded-[2px]">
                        <img src="/footer/googlepay.png" width={'20px'} alt="" />
                    </div>

                    <div className="bg-pink-300 px-3 py-2 text-xs font-semibold rounded-[2px]">
                        Klarna
                    </div>

                </div>

                <p className="text-xs">
                    © 2026 Bloom & Wild Limited. All rights reserved.
                </p>

            </div>

            <div className="flex flex-wrap justify-end gap-6 mt-8 text-sm">

                <a href="#" className="underline hover:no-underline">
                    Terms & Conditions
                </a>

                <a href="#" className="underline hover:no-underline">
                    Cookie statement
                </a>

                <a href="#" className="underline hover:no-underline">
                    Cookie preferences
                </a>

            </div>

        </div>
    </footer>
    );
}
export default Footer;