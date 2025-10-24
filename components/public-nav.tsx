"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function PublicNav() {
  const pathname = usePathname() || ''

  // hide the public admin/login button when we're inside the admin area
  const hideAdmin = pathname.includes('/admin')

  return (
    <nav className={`bg-gray-800 text-white ${!hideAdmin &&"p-3"}`}>
        {
            hideAdmin?null:   <div className="container mx-auto m-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PAC Consultants
        </Link>
        <div className="space-x-4">
          <Link href="/about" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-700">About</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-700">Contact</Button>
          </Link>
          <Link href="/book-a-call" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-700">Book a Call</Button>
          </Link>
          <Link href="/become-a-affiliate" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-700">Affiliate</Button>
          </Link>
          <Link href="/blogs" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-700">Blogs</Button>
          </Link>

          {!hideAdmin && (
            <Link href="/login" passHref>
              <Button variant="secondary" className="bg-indigo-600 hover:bg-indigo-700 text-white">Admin Login</Button>
            </Link>
          )}
        </div>
      </div>
        }
   
    </nav>
  )
}
