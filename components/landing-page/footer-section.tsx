import React from 'react'
import {cacheLife} from "next/cache";
export const FooterSection = async() => {
    'use cache' // NextJS Caching enabled
    cacheLife({ revalidate: 3600 });
    return (
    <div>
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Built It. All rights reserved.</p>
            <div className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
            </div>
            </div>
        </footer>
    </div>
  )
}
