import './styles.css'
import icon from '../../assets/img/notification-icon.svg'

function Main() {
  return(
    <>
    <main>
        <section id="sales">
            <div className="dsmeta-container">
                <div className="dsmeta-card">
                    <h2 className="dsmeta-sales-title">Vendas</h2>
                    <div>
                        <div className="dsmeta-form-control-container"><input className="dsmeta-form-control" type="date"
                                name="Data" id="data-inicial" /></div>
                        <div className="dsmeta-form-control-container"><input className="dsmeta-form-control" type="date"
                                name="Data" id="data-final" /></div>
                    </div>

                    <div>
                        <table className="dsmeta-sales-table">
                            <thead>
                                <tr>
                                    <th className="show992">ID</th>
                                    <th className="show576">Data</th>
                                    <th>Vendedor</th>
                                    <th className="show992">Visitas</th>
                                    <th className="show992">Vendas</th>
                                    <th>Total</th>
                                    <th>Notificar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="show992">#001</td>
                                    <td className="show576">09/07/2022</td>
                                    <td>Anakin</td>
                                    <td className="show992">15</td>
                                    <td className="show992">5</td>
                                    <td>R$ 5530.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <div className="dsmeta-red-btn"><img  src={icon}
                                                    alt="notificar" /></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#002</td>
                                    <td className="show576">10/07/2022</td>
                                    <td>Criscia</td>
                                    <td className="show992">11</td>
                                    <td className="show992">7</td>
                                    <td>R$ 6800.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <div className="dsmeta-red-btn"><img  src={icon}
                                                    alt="notificar" /></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#003</td>
                                    <td className="show576">11/07/2022</td>
                                    <td>Gerdam</td>
                                    <td className="show992">20</td>
                                    <td className="show992">14</td>
                                    <td>R$ 7000.00</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <div className="dsmeta-red-btn"><img  src={icon}
                                                    alt="notificar" /></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Main