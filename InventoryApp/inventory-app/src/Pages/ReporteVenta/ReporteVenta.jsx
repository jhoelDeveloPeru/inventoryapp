import React from 'react'
import './ReporteVenta.css'
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { Table, Tag, Space } from 'antd';
const { Option } = Select;


const dataSource = [
    {
        item: 1,
        fecha: '05/10/2021',
        cliente: 'John Doe',
        doc:'45903278',
        monto: '304.00',
        detalle: 'Ver'
    },
    {
        item: 2,
        fecha: '07/10/2021',
        cliente: 'Jane Carl',
        doc:'57438932',
        monto: '185.60',
        detalle: 'Ver'
    },
    {
        item: 3,
        fecha: '13/10/2021',
        cliente: 'Rose Marie',
        doc:'48329021',
        monto: '403.50',
        detalle: 'Ver'
    },
    {
        item: 4,
        fecha: '20/10/2021',
        cliente: 'Peter Pan',
        doc:'48329032',
        monto: '185.60',
        detalle: 'Ver'
    },
    {
        item: 5,
        fecha: '21/10/2021',
        cliente: 'John Wick',
        doc:'43453221',
        monto: '207.30',
        detalle: 'Ver'
    },
];


const columns = [
    {
        title: 'Item',
        dataIndex: 'item',
        key: 'item',
    },
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
    },
    {
        title: 'Cliente',
        dataIndex: 'cliente',
        key: 'cliente',
    },
    {
        title: 'RUC/DNI',
        dataIndex: 'doc',
        key: 'doc',
    },
    {
        title: 'Monto Vendido',
        dataIndex: 'monto',
        key: 'monto',
    },
    {
        title: 'Detalle',
        dataIndex: 'detalle',
        key: 'detalle',
    }
];


export default function ReporteVenta() {
    return (
        <div>
            <div className="subtitle"><label>Reporte de ventas</label></div>
            <div className="container">
                <div>
                    Fecha Inicio:
                    <Input style={{ width: 200 }}/>
                </div>
                <div >
                    Fecha Fin:
                    <Input style={{ width: 200 }}/>
                </div>
                <div >
                    Por Cliente:
                    <Input style={{ width: 200 }} placeholder="Ingrese Nombre de Cliente" />
                </div>
                <div className="item">
                    <Button style={{ width: 200 }} type="primary" ghost>Buscar</Button>
                </div>
            </div>
            <div className="tb">
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}
