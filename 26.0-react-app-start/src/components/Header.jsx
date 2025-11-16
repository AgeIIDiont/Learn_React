import LogoImg from "../assets/tuhoc.cc.png"
export default function Header() {
    return(
        <>
            <header>
                <img src={LogoImg} alt="Logo"/>
                <h1>Tuhoc.cc Quiz</h1>
            </header>
        </>
    )
}