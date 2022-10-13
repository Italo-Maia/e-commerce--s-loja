import React from 'react';
import Link from 'next/link';

const HeaderLogo = () => (
    <div className="flex-2 flex flex-center">
        <Link href="/">
            <img src="/logo.png" className="logo" width="20%" />
        </Link>k
    </div>
)

export default HeaderLogo;