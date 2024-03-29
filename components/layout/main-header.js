import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>Collections</Link>
            </div>
            <nav className={classes.navigation}>
                <ul className={classes.navigationWrapper}>
                    <li><Link href='/boardgames'>Boardgames</Link></li>
                    <li><Link href='/lego'>Lego</Link></li>
                    <li><Link href='/records'>Records</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;