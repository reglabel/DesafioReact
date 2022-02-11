const Footer = () => {
  return (
    <div>
      <div className="grid justify-items-center">
        <img className="box-content p-4 w-20" src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="logo disney"/>
      </div>

      {/*<div className="text-center grid justify-items-center grid-cols-5 gap-4">*/}
      <div className="text-center flex justify-center flex-wrap gap-6">
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Português
        </span>
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Contrato de Assinatura
        </span>
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Política de privacidade
        </span>
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Proteção de Dados no Brasil
        </span>
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Anúncios personalizados
        </span>
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Dispositivos compatíveis
        </span>
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Ajuda
        </span>
        <span className="text-sm text-neutral-500 hover:text-gray-600">
            Sobre o Disney+
        </span>       
      </div>

      <div className="text-center p-2 grid items-stretch w-4/5 m-auto">
        <span className="text-neutral-600 text-sm">® 2021 Disney, Disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</span>
      </div>

      <div className="text-center p-6 pt-1 grid items-stretch w-4/5 m-auto">
        <span className="text-neutral-600 text-sm">Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20</span>
      </div>
    </div>
  );
};

export default Footer;
