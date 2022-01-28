import { connect, Head } from "frontity";

const MainHead = ({ state, actions, children }) => {
    const data = state.source.get(state.router.link);

    return (
        <Head>
            <title>My First Frontity Theme</title>
            <meta
                name="description"
                content="Based on the Frontity step by step tutorial"
            />
            {children}
        </Head>
    );
};

export default connect(MainHead)