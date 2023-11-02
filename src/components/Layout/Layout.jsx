// import { NavBar } from 'components/NavBar/NavBar'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


import {
    Container,
    Header,
    Logo,
    Links,
    Footer,
    Text,
    IconLogo,
} from './Layout.styled';

export const Layout = () => {
    // return (
    //     <main>
    //         <NavBar />
    //         <Outlet />
    //     </main>
    // )
    return (
        <>
            <Container>
                <Header>
                    <Logo>
                        <IconLogo />
                        TMDB
                    </Logo>
                    <nav>
                        <Links to="/" end>
                            Home
                        </Links>
                        <Links to="/movies">Movie</Links>
                    </nav>
                </Header>
                <Suspense fallback={<h1>loading....</h1>}>
                    <Outlet />
                </Suspense>
                <Footer>
                    <Text>&copy; {new Date().getFullYear()} Movie Search</Text>
                </Footer>
            </Container>
        </>
    );
}