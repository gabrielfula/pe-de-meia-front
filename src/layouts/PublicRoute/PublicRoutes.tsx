import { Link, Outlet } from 'react-router-dom'

export default function PublicRoutes() {
    return (
        <>
            <div className='flex flex-col gap-10 justify-center h-screen items-center'>
                <div className='w-1/6'>
                    <Link to="/">
                        <img src={"https://junglegaming.io/images/logos/logo.svg"} alt="Logo" />
                    </Link>
                </div>
                <div className='w-1/3'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
