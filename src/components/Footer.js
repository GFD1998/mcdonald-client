import FooterStyles from '../pages/styles/footer.module.css';


const Footer = () => {
    const year = new Date().getFullYear(); //gets current year
    return (
            <footer>
                <div className={"container"}>
                    <span>&copy;McDonald's Corporation. 1955-{year}</span>
                </div>
            </footer>
    );
};

export default Footer;