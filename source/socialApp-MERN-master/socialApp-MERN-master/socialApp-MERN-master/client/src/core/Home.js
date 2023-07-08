import React from 'react';

import Posts from '../post/Posts';

const Home = () => (
    <>
        <div className="container">
            <Posts />
        </div>
        <footer className="page-footer font-small" style={{ background: "#3E4551" }}>
            <div className="container">
                <p className="text-center" style={{ color: "#fff", fontSize: "large", margin: "0", padding: "20px" }}>
                    Made with <i className="fas fa-heart" style={{ color: "red", fontSize: "24px" }}></i> by
                        <a href="https://www.facebook.com/profile.php?id=100089319578085" style={{ color: "white" }} > Hiếu Hương </a>
                </p>
            </div>
        </footer>
    </>
);

export default Home;