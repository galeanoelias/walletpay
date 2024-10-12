import Item from "../../components/ItemProfile/Item";
import Header from "../../components/header/Header";
import Link from "../../assets/svg/Link.svg";

const Help = () => {
  return (
    <>
      <Header dato={"Ayuda"} />

      <div className="flex-col items-center justify-center max-w-[700px] m-auto">
        <h2 className="font-semibold text-center text-xl  mt-10">
          ¿En que podemos ayudarte?
        </h2>

        <div className="bg-white shadow-cardShadow ml-5 mr-5 rounded-xl p-1 mt-5">
          <Item
            icon={Link}
            title={"Transferencias"}
            description={"Factura, detalles, error en el sistema, etc"}
            data={"#"}
          />

          <Item
            icon={Link}
            title={"Código QR"}
            description={"Transferencias, recargas, etc"}
            data={"#"}
          />

          <Item
            icon={Link}
            title={"Datos Personales"}
            description={"Número de celular, alias, etc"}
            data={"#"}
          />

          <Item
            icon={Link}
            title={"Tarjetas"}
            description={"Añadir nueva tarjeta, borrar tarjeta, etc"}
            data={"#"}
          />
        </div>
      </div>
    </>
  );
};

export default Help;
