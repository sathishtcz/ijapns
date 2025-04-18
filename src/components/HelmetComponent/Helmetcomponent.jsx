import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="IJAPNS, International Journal of Applied Psychology and Neuroscience , Applied Psychology & Neuroscience, Journal & Performance research papers ,Psychology and Neuroscience, Science, Psychology" />
      <meta name="description" content="The International Journal of Applied Psychology and Neuroscience publishes high-quality, peer-reviewed research in the fields of psychology, neuroscience, and applied cognitive science. It features original research articles, review papers, case studies, and more. With open access and global reach, the journal aims to advance knowledge and foster innovation in these dynamic fields." />
      <meta name="author" content="IJAPNS Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Journal of Applied Psychology and Neuroscience" />
      <meta property="og:description" content="The International Journal of Applied Psychology and Neuroscience publishes high-quality, peer-reviewed research in the fields of psychology, neuroscience, and applied cognitive science. It features original research articles, review papers, case studies, and more. With open access and global reach, the journal aims to advance knowledge and foster innovation in these dynamic fields." />
      <meta property="og:url" content="https://www.ijapns.com/" />
      <meta property="og:image" content="https://www.ijapns.com/assets/images/IJAPNS.png" />

      <link rel="icon" type="image/png" href="https://www.ijapns.com/assets/images/Fav.png" />
    </Helmet>
  );
};

export default HelmetComponent;