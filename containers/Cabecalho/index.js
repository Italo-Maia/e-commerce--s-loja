import CartItem from '../../components/Cards/CartItem';
import SearchField from '../../components/Fields/SearchField';
import Logo from '../../components/Logo/HeaderLogo';

const Cabecalho = (props) => {

    const renderSimpleHeader = () => {
        return (
            <div className="Header">
                <div className="header-wrapper">
                    <Logo />
                    <SearchField />
                    <CartItem />
                    {/* <InputSearch />
                    <CardCart /> */}
                </div>
            </div>
        )
    }

    const renderNormalHeader = () => {
        return (
            <div>
               <Logo />
            </div>
        )
    }

    const { simple } = props;
    return simple ?
        renderSimpleHeader() :
        renderNormalHeader()
}

export default Cabecalho;