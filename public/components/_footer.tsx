interface _footerProps {}

const _footer: React.FC<_footerProps> = () => {
  return (
    <footer className="flex justify-center items-center h-16 bg-black text-white">
      <p className="text-sm font-sans mb-1">
        © 2024 - Todos os direitos reservados - Clique nas imagens para acessar os repositórios. 
        Mais projetos estão em desenvolvimento, fique ligado!
      </p>
    </footer>
  );
};

export default _footer