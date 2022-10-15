import CartItem from '../../components/Cards/CartItem';
import SearchField from '../../components/Fields/SearchField';
import Logo from '../../components/Logo/HeaderLogo';

import styles from '../../styles/Header.module.css'

const Cabecalho = (props) => {

    const renderSimpleHeader = () => {
        return (
            <div className={styles.Header}>
                <div className={styles["header-wrapper"]}>
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