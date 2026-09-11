import "./footer.css";

function Footer() {
    const currentYEar = new Date().getFullYear();

    return(
        <footer>   
            Copyright Pixell River Financial {currentYEar}
        </footer> 
    );
}

export default Footer