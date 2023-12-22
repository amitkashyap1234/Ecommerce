import { useEffect } from "react";
import StorageService from "../../util/StorageService";
import { store } from "../../app/store";
import { hydrate } from "../../slices/cartSlice";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Header from "../Header/Header";
import { signIn, useSession } from "next-auth/client";
import Loader from "react-loader-spinner";
import HeaderMobile from "../Header/HeaderMobile";
import HeaderDashboard from "../Header/HeaderDashboard";

function Layout({ children, admin, auth }) {
    const [session, loading] = useSession();

    useEffect(() => {
        store.subscribe(() => {
            StorageService.set("cart", JSON.stringify(store.getState().cart));
        });
        let cart = StorageService.get("cart");
        cart = cart ? JSON.parse(cart) : { items: [] };
        store.dispatch(hydrate(cart));
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
                />
                <title>Ecommerce</title>
                <meta
                    name="description"
                    content="E-commerce website"
                />
            </Head>
            <div className="layout">
                {loading ? (
                    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 loader">
                        <Loader type="TailSpin" color="#0a81ab" />
                    </div>
                ) : admin ? (
                    session && session?.admin ? (
                        <>
                            <HeaderDashboard />
                            {children}
                            <Footer admin />
                        </>
                    ) : (
                        signIn()
                    )
                ) : auth ? (
                    session ? (
                        <>
                            <Header />
                            <HeaderMobile />
                            {children}
                            <Footer />
                        </>
                    ) : (
                        signIn()
                    )
                ) : (
                    <>
                        <Header />
                        <HeaderMobile />
                        {children}
                        <Footer />
                    </>
                )}
            </div>
        </>
    );
}

export default Layout;
