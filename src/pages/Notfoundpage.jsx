import { Link } from 'react-router-dom'

export default function Notfoundpage() {
    return <div> 404 Not Found the page
        <span className='text-2xl text-orange-500'><Link to="/">Home</Link></span>
    </div>;
}
