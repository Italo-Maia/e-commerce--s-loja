
import Layout from '../components/Layout';

import Cabecalho from '../containers/Cabecalho';
// import Banners from '../containers/Banners';
// import Beneficios from '../containers/Beneficios';
// import ProdutosPaginaInicial from '../containers/Lista/ProdutosPaginaInicial';
// import Rodape from '../containers/Rodape';

const Home = () => {
  return (
    <div >
      <Layout title="Loja King">
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
