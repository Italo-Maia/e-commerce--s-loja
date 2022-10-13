import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

import Cabecalho from '../containers/Cabecalho';
// import Banners from '../containers/Banners';
// import Beneficios from '../containers/Beneficios';
// import ProdutosPaginaInicial from '../containers/Lista/ProdutosPaginaInicial';
// import Rodape from '../containers/Rodape';

const Home = () => {
  return (
    <div className={styles.container}>
      <Layout title="Loja King">
        <h2>Loja King</h2>
        <Cabecalho simple/>
        {/* <Banners />
        <Beneficios />
        <ProdutosPaginaInicial />
        <Rodape /> */}
      </Layout>
    </div>
  )
}

export default Home;
