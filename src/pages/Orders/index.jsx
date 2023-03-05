import { useEffect, useContext, useState } from "react";
import { productsService } from "./../../services/productService.js";
import { AuthContext } from "../../context";
import "./styles.css";

const Orders = () => {
  const { datosUsuario } = useContext(AuthContext);
  const [ordenes, setOrdenes] = useState([]);
  const [orden, setOrden] = useState();

  useEffect(() => {
    if (datosUsuario?.uid) {
      productsService.getAllOrders(datosUsuario.uid).then((datos) => {
        setOrdenes(datos);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datosUsuario]);

  const detalleOrden = (item) => {
    setOrden(item);
  };

  return (
    <>
      <div className="carritoContainer">
        <div className="encabezado">
          <div className="tituloPrincipal">
            <h1>ORDENES DE COMPRA</h1>
          </div>
        </div>

        <div className="contenedorOrdenes">
          <div className="listaOrdenes">
            <h3>Mis Ordenes</h3>
            {ordenes.map((orden) => {
              return (
                <div key={orden.id} onClick={() => detalleOrden(orden)}>
                  {orden.id}
                </div>
              );
            })}
          </div>

          {orden ? (
            <>
              <div className="detalleOrden">
                <div className="encabezadoDetalle">
                  <h3>Detalle de la orden</h3>
                </div>
                <div className="informacionOrden">
                  <div>
                    <p>
                      Nombre: {orden?.user.nombres} {orden.user.apellidos}
                    </p>
                    <p>Correo: {orden.user.email}</p>
                  </div>
                  <div>
                    <p>Teléfono: {orden.user.telfono} </p>
                    <p>Dirección: {orden.user.direccion}</p>
                  </div>
                </div>

                <div className="informacionProductos">
                  {orden.items.map((product) => {
                    return (
                      <div key={product.price} className="productoItem">
                        <div className="itemNombre">
                          <div className="productoItemProduct">
                            {product.product}
                          </div>
                        </div>

                        <div className="itemPrecio">
                          <div className="productoItemCant">
                            {product.price}
                          </div>
                          <div className="productoItemCant">
                            {product.quantity}
                          </div>
                          <div className="productoItemCant">
                            {product.quantity * product.price}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export { Orders };
